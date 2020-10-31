import Vue from 'vue'
import CloudBase from '@cloudbase/vue-provider';
import { Lazyload } from 'vant';
import './libs/flexible';
import App from './App.vue'
import config from '../cloudbaserc';
import router from './router'
import store from './store'
import { wxInit } from './libs/wxsdk';
import { titlePre } from './libs/util';
import './directives/polyfillInput';
Vue.config.productionTip = false;

Vue.use(Lazyload);

Vue.use(CloudBase, {
    env: config.envId
});

titlePre();

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
        // // eslint-disable-next-line no-undef
        // Pace.on('hide', function () {
        //     $('#loading').remove();
        //     $('.pace').remove();
        // });
    }
}).$mount('#app');
