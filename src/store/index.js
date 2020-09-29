// 初始化 store
import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        tabName: 'home',
        initAppReady: false,
        isLoadingPage: true,
        loadText: '加载中...'
    },
    mutations: {
        updateLoadingStatus (state, isLoading) {
            state.isLoadingPage = isLoading
        },
        updateLoadingText (state, text) {
            state.loadText = text
        },
        updateInitAppReady (state, ready) {
            state.initAppReady = ready
        },
        updateTabName (state, index) {
            state.tabName = index
        }
    }
});

export default store;
