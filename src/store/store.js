import Vue from 'vue';
import Vuex from 'vuex';

// 安装
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // 杂物浮框的显示
        isGloveBoxDisplay: false,
        // TabBar中火焰图标的Url
        createUrl: require('@/assets/img/TabBar/create.svg'),
        // // 记录进入profile页前是在chat页还是在explore页，以便返回至该页
        latestStay: '/chat',
        isLogin: false,
        userInfo: {},
        chatStatus: {
            scroll: 0
        },
        exploreStatus: {
            scroll: 0
        }
    },
    mutations: {
        setIsGloveBoxDisplay (state, val) {
            state.isGloveBoxDisplay = val;
        },
        setCreateUrl (state, val) {
            state.createUrl = val;
        },
        setLatestStay (state, val) {
            state.latestStay = val;
        },
        setIsLogin (state, val) {
            state.isLogin = val;
        },
        setUserInfo (state, val) {
            state.userInfo = val;
        },
        setChatStatus (state, val) {
            state.chatStatus = val;
        },
        setExploreStatus (state, val) {
            state.exploreStatus = val;
        }
    },
    actions: {

    },
    getters: {

    },
    modules: {

    }
});

export default store;