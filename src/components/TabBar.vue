<template>
    <div class="tab-bar">
        <div :class="{active: item.type === $store.state.tabName}" :key="index"
             @click="itemClick(item)" class="tab-bar_item" v-for="(item, index) in tabBar">
            <div :class="item.type" class="tab-bar_icon">
                <img :src="item.type === $store.state.tabName ? item.selectedIconPath : item.iconPath">
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
                        type: 'Home',
                        iconPath: (() => require('../assets/tab/icon-home.png'))(),
                        selectedIconPath: (() => require('../assets/tab/icon-home-selected.png'))(),
                        text: '首页'
                    },
                    {
                        type: 'Schedule',
                        iconPath: (() => require('../assets/tab/icon-sch.png'))(),
                        selectedIconPath: (() => require('../assets/tab/icon-sch-selected.png'))(),
                        text: '流程'
                    },
                    {
                        type: 'Video',
                        iconPath: (() => require('../assets/tab/icon-video.png'))(),
                        selectedIconPath: (() => require('../assets/tab/icon-video-selected.png'))(),
                        text: '直播'
                    },
                    {
                        type: 'News',
                        iconPath: (() => require('../assets/tab/icon-news.png'))(),
                        selectedIconPath: (() => require('../assets/tab/icon-news-selected.png'))(),
                        text: '新闻'
                    },
                    {
                        type: 'Show',
                        iconPath: (() => require('../assets/tab/icon-game.png'))(),
                        selectedIconPath: (() => require('../assets/tab/icon-game.png'))(),
                        text: '游戏',
                        link: 'http://rainy.cloud-app.com.cn/project/yiwu_game/index.html'
                    }
                ]
            }
        },
        methods: {
            itemClick: function (item) {
                if (item.link) {
                    window.location.href = item.link;
                    return false;
                }
                // 已经通过pointer-events: none; 禁止
                if (this.$store.state.tabName === item.type) {
                    return false;
                }
                this.$router.push({
                    name: item.type
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
            /*padding-bottom: constant(safe-area-inset-bottom); !* iOS 11.0 *!*/
            /*padding-bottom: env(safe-area-inset-bottom); !* iOS 11.2 *!*/
        }
    }

    .tab-bar {
        position: fixed;
        left: 0;
        bottom: -1px;
        display: flex;
        width: 100%;
        height: 50px;
        /*padding-bottom: constant(safe-area-inset-bottom); !* iOS 11.0 *!*/
        /*padding-bottom: env(safe-area-inset-bottom); !* iOS 11.2 *!*/
        align-items: center;
        justify-content: space-between;
        z-index: 999;
        background: #EDEDED;
        border-top: 1Px solid #797979;
        .tab-bar_item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 120px;
            height: 100%;
            margin: 0 5px;
            justify-content: center;
            opacity: 0.99;
            transition: ease opacity 500ms;

            &.active {
                opacity: 1;
                transition: ease opacity 500ms;

                .tab-bar_icon {
                    transition: ease opacity 500ms;
                }

                .tab-bar_text {
                    color: #000 !important;
                    transition: ease opacity 500ms;
                }
            }

            .tab-bar_icon {
                position: relative;
                width: 24px;
                height: 26px;
                background-repeat: no-repeat;
                background-position: 0 50%;
                font-size: 0;

                > img {
                    width: 24px;
                    height: 26px;
                    display: block;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            .tab-bar_text {
                color: #7A7A7A;
                height: 9px;
                margin-top: 5px;
                line-height: 9px;
                font-size: 11px;
                text-align: center;
            }
        }
    }

</style>
