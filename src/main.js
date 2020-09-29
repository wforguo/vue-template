import Vue from 'vue'
import CloudBase from '@cloudbase/vue-provider';
import { Lazyload } from 'vant';
import App from './App.vue'
import './assets/js/flexible';
import config from '../cloudbaserc';
import router from './router'
import store from './store'
// import VueLazyLoad from 'vue-lazyload'
import { wxInit } from './assets/js/wxsdk'
import stop from './assets/js/stop';

let testFlag = window.location.href.indexOf('-t') >= 0 || (/\d+\.\d+\.\d+\.\d+/.test(window.location.hostname));
if (testFlag) {
    let title = document.title;
    document.title = '【测试】' + title
} else {
    stop();
}
// iOS系统的移动设备, 激活:active状态。
document.body.addEventListener('touchstart', function () {
    // ...空函数即可
});

Vue.config.productionTip = false;

Vue.use(Lazyload);

Vue.use(CloudBase, {
    env: config.envId
});

new Vue({
    router,
    store,
    render: h => h(App),
    mounted: async () => {
        try {
            await wxInit(window.shareData); // 微信分享
        } catch (e) {
            console.log(e);
        }
        const titlePrefix = process.env.NODE_ENV === 'development' ? '【Dev】' : '【Pro】';
        console.log(`%c Environment %c ${titlePrefix || '【Dev】'}`, 'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060', 'padding: 1px 5px 1px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e');
        console.log(`%c Version %c ${process.env.VUE_APP_VERSION}`, 'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060', 'padding: 1px 5px 1px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475b2');
        console.log(`%c BuildTime %c ${process.env.VUE_APP_BUILD_TIME}`, 'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060', 'padding: 1px 5px 1px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475b2');
    }
}).$mount('#app');
