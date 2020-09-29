import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';

const home = resolve => {
    require.ensure(['@/pages/Home'], () => {
        resolve(require('@/pages/Home'))
    }, 'home')
};
const video = resolve => {
    require.ensure(['@/pages/Video'], () => {
        resolve(require('@/pages/Video'))
    }, 'video')
};
const intro = resolve => {
    require.ensure(['@/pages/Intro'], () => {
        resolve(require('@/pages/Intro'))
    }, 'intro')
};
const show = resolve => {
    require.ensure(['@/pages/Show'], () => {
        resolve(require('@/pages/Show'))
    }, 'show')
};
const showDetail = resolve => {
    require.ensure(['@/pages/ShowDetail'], () => {
        resolve(require('@/pages/ShowDetail'))
    }, 'showDetail')
};
const year = resolve => {
    require.ensure(['@/pages/Year'], () => {
        resolve(require('@/pages/Year'))
    }, 'year')
};
const yearDetail = resolve => {
    require.ensure(['@/pages/YearDetail'], () => {
        resolve(require('@/pages/YearDetail'))
    }, 'yearDetail')
};
const news = resolve => {
    require.ensure(['@/pages/News'], () => {
        resolve(require('@/pages/News'))
    }, 'news')
};

Vue.use(Router);

const router = new Router({
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            meta: {
                title: '首页',
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/video',
            name: 'video',
            component: video,
            meta: {
                title: '直播',
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/intro',
            name: 'intro',
            component: intro,
            meta: {
                title: '信息',
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/news',
            name: 'news',
            component: news,
            meta: {
                title: '新闻',
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/show',
            name: 'show',
            component: show,
            meta: {
                title: '展厅',
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/showDetail',
            name: 'showDetail',
            component: showDetail,
            meta: {
                title: '展厅',
                activePath: 'show',
                keepAlive: false // 不需要被缓存
            }
        },
        {
            path: '/year',
            name: 'year',
            component: year,
            meta: {
                title: '20周年',
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/yearDetail',
            name: 'yearDetail',
            component: yearDetail,
            meta: {
                title: '20周年',
                activePath: 'year',
                keepAlive: false // 需要被缓存
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
