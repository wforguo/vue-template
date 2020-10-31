<template>
    <div id="app">
        <transition name="slide-fade">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
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
            TabBar
        },
        mounted () {
            setTimeout(() => {
                this.$store.commit('updateInitAppReady', true);
            }, 500);
        }
    }
</script>
<style lang="scss">
    @import "assets/css/base.scss";
    @import "assets/css/common.scss";
    @import 'assets/css/loader'; // 使用了 自定义loader
</style>
