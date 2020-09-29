<template>
    <div class="tab-bar">
        <div :class="{active: item.type === $store.state.tabName}" :key="index"
             @click="itemClick(item.type)" class="tab-bar_item" v-for="(item, index) in tabBar">
            <div :class="item.type" class="tab-bar_icon">
                <img :src="item.icon">
            </div>
            <div class="tab-bar_text">{{item.text}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tabBar: [
                    {
                        type: 'home',
                        icon: (() => require('../assets/tab/icon-home.png'))(),
                        text: '首页'
                    },
                    {
                        type: 'intro',
                        icon: (() => require('../assets/tab/icon-info.png'))(),
                        text: '信息'
                    },
                    {
                        type: 'video',
                        icon: (() => require('../assets/tab/icon-video.png'))(),
                        text: '直播'
                    },
                    {
                        type: 'news',
                        icon: (() => require('../assets/tab/icon-news.png'))(),
                        text: '新闻'
                    },
                    {
                        type: 'show',
                        icon: (() => require('../assets/tab/icon-show.png'))(),
                        text: '展厅'
                    },
                    {
                        type: 'year',
                        icon: (() => require('../assets/tab/icon-year.png'))(),
                        text: '20周年'
                    }
                ],
                routeArr: ['home', 'intro', 'video', 'news', 'show', 'year']
            }
        },
        methods: {
            itemClick: function (type) {
                // 已经通过pointer-events: none; 禁止
                // if (this.$store.state.tabName === type) {
                //     return false;
                // }
                this.$router.replace({
                    name: type
                });
            }
        },
        created () {

        }
    }
</script>
<style lang="less" scoped>
    @supports (bottom: constant(safe-area-inset-bottom)) {
        .tab-bar {
            /* 适配底部黑条*/
            padding-bottom: constant(safe-area-inset-bottom); /* iOS 11.0 */
            padding-bottom: env(safe-area-inset-bottom); /* iOS 11.2 */
        }
    }

    .tab-bar {
        position: fixed;
        left: 0;
        bottom: -1px;
        display: flex;
        width: 100%;
        height: 122px;
        padding-bottom: constant(safe-area-inset-bottom); /* iOS 11.0 */
        padding-bottom: env(safe-area-inset-bottom); /* iOS 11.2 */
        align-items: center;
        justify-content: space-between;
        z-index: 999;
        background: rgba(255, 255, 255, 0.1) url("../assets/imgs/tab-bg.png") no-repeat 50% 100%;
        background-size: 100% auto;

        .tab-bar_item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 125px;
            height: 100%;
            margin: 0 10px;
            justify-content: center;
            opacity: 0.5;
            transition: ease opacity 500ms;

            &.active {
                opacity: 1;
                transition: ease opacity 500ms;

                .tab-bar_icon {
                    transition: ease opacity 500ms;
                }

                .tab-bar_text {
                    color: #fff !important;
                    transition: ease opacity 500ms;
                }
            }

            .tab-bar_icon {
                position: relative;
                width: 50px;
                height: 49px;
                background-repeat: no-repeat;
                background-position: 0 50%;
                font-size: 0;

                > img {
                    width: 50px;
                    height: 49px;
                    display: block;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            .tab-bar_text {
                color: #fff;
                height: 18px;
                margin-top: 10px;
                line-height: 18px;
                font-size: 22px;
                text-align: center;
            }
        }
    }

</style>
