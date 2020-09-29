<template>
    <div id="app">
        <StarBg/>
        <transition name="slide-fade">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <!--<router-view v-if="!$route.meta.keepAlive"></router-view>-->
        <transition name="fade">
            <div class="loader" v-show="isloading">
                <div class="loader-mask"></div>
                <div class="loader-box">

                    <div class="loadingio-spinner-dual-ring-njph128ytkj">
                        <div class="ldio-8bft3x52rt6">
                            <div></div>
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </transition>
        <TabBar/>
        <Music/>
    </div>
</template>
<script>
    import Music from './components/Music.vue'
    import TabBar from './components/TabBar.vue'
    import StarBg from './components/StarBg';

    export default {
        name: 'app',
        data () {
            return {}
        },
        computed: {
            isloading () {
                return this.$store.state.isLoadingPage || !this.$store.state.initAppReady
            },
            text () {
                return this.$store.state.loadText
            }
        },
        components: {
            Music,
            TabBar,
            StarBg
        },
        mounted () {
            setTimeout(() => {
                this.$store.commit('updateInitAppReady', true)
            }, 500);
        }
    }
</script>
<style lang="scss">
    @import "assets/css/base.scss";
    @import "assets/css/common.scss";
    @import 'assets/css/loader';
    /*@import '~loaders.css'; // 使用了 自定义loader*/
</style>

<style lang="scss">
    .index-logo {
        position: absolute;
        width: 91px;
        height: 81px;
        top: 63px;
        left: 66px;

        &.text-enter {
            opacity: 0;
            transform: translateY(10px)
        }

        &.text-enter-active {
            transition: all 1.5s;
        }
    }

    .index-tips {
        position: absolute;
        width: 235px;
        height: 91px;
        top: 50px;
        right: 60px;

        &.text-enter {
            opacity: 0;
            transform: translateY(10px)
        }

        &.text-enter-active {
            transition: all 1.5s;
        }
    }

    .header-title {
        width: 550px;
        margin: 168px auto 43px;
        text-align: center;
        position: relative;
        overflow: hidden;

        &-main {
            font-size: 53px;
            font-weight: 400;
            color: rgba(255, 253, 253, 1);
            margin-bottom: 29px;
        }

        &-second {
            font-size: 24px;
            font-weight: normal;
            color: rgba(255, 255, 255, 1);
            margin-bottom: 62px;
        }

        &:after {
            content: '';
            width: 76px;
            height: 5px;
            background: #fff;
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translate3d(-50%, 0, 0);
        }
    }
</style>
