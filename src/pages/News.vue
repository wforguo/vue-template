<template>
    <div class="news" id="newsPage">
        <transition name="text">
            <img alt="" class="index-logo" src="../assets/imgs/index-logo.png" v-show="isTrans">
        </transition>
        <transition name="text">
            <img alt="" class="index-tips" src="../assets/imgs/index-tips.png" v-show="isTrans">
        </transition>

        <div class="header-title">
            <p class="header-title-main">新闻报道</p>
            <p class="header-title-second">NEWS REPORT</p>
        </div>
        <div class="news-list" v-if="newsList.length > 0">
            <div :key="index" @click="navNews(item.url)" class="news-item" v-for="(item,index) in newsList">
                <div :style="{backgroundImage: 'url(' + item.src + ')'}" alt="" class="news-img"></div>
                <div class="news-msg">{{item.msg}}</div>
            </div>
        </div>
        <div class="no-data" v-else>
            敬请期待~
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'news',
        data () {
            return {
                isTrans: false,
                newsList: window.newsList
            }
        },
        mounted () {
            this.isTrans = true
        },
        methods: {
            navNews (url) {
                window.location.href = url
            }
        }
    }
</script>

<style lang="less" scoped>
    .news {
        position: relative;
        width: 100%;
        height: calc(100vh - 135px);
        background-size: 100% 100%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        overflow: hidden;
        overflow-y: auto;

        .news-list {
            width: 100%;
            height: auto;
        }

        .news-item {
            width: 622px;
            margin: 0 auto 45px;
            height: 167px;
            background: rgba(233, 233, 233, 0.32);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            &:active {
                opacity: 0.75;
            }
        }

        .news-img {
            width: 188px;
            height: 167px;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: cover;
            background-color: rgba(0, 0, 0, 0.3);
        }

        .news-msg {
            width: 622px - 188px - 40px;
            height: 167px - 34px;
            padding: 14px 20px 20px;
            font-size: 25px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 37px;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4; // 要显示的行数
            -webkit-box-orient: vertical;
        }
    }
</style>
