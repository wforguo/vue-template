import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';

const Home = resolve => {
    require.ensure(['@/pages/Home'], () => {
        resolve(require('@/pages/Home'))
    }, 'Home')
};
const Video = resolve => {
    require.ensure(['@/pages/Video'], () => {
        resolve(require('@/pages/Video'))
    }, 'Video')
};
const Schedule = resolve => {
    require.ensure(['@/pages/Schedule'], () => {
        resolve(require('@/pages/Schedule'))
    }, 'Schedule')
};
const Show = resolve => {
    require.ensure(['@/pages/Show'], () => {
        resolve(require('@/pages/Show'))
    }, 'Show')
};
const News = resolve => {
    require.ensure(['@/pages/News'], () => {
        resolve(require('@/pages/News'))
    }, 'News')
};

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: '首页',
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/Video',
            name: 'Video',
            component: Video,
            meta: {
                title: '直播',
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/Schedule',
            name: 'Schedule',
            component: Schedule,
            meta: {
                title: '信息',
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/News',
            name: 'News',
            component: News,
            meta: {
                title: '新闻',
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/Show',
            name: 'Show',
            component: Show,
            meta: {
                title: '展厅',
                keepAlive: true // 需要被缓存
            }
        }
    ]
});

// 初始化 页面加载loading
router.beforeEach(function (to, from, next) {
    // 保存tab栏状态(刷新的时候)
    let tabName = to.meta.activePath || to.name;
    store.commit('updateLoadingText', '加载中...');
    store.commit('updateLoadingStatus', true);
    store.commit('updateTabName', tabName);
    // document.title = to.meta.title || '';
    // 结束
    next()
});

router.afterEach(function () {
    // window.scrollTo(0, 0)
    // 修改跳转iframe时loading加载
    setTimeout(() => {
        store.commit('updateLoadingStatus', false)
    }, 50);
});

export default router;
