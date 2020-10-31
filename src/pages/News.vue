<template>
    <div class="page news" id="News">
        <HeadTitle title="新闻" />

        <div class="news-list" v-if="newsList.length > 0">
            <div :key="index" @click="navNews(item.url)" class="news-item btn-hover" v-for="(item,index) in newsList">
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
    import HeadTitle from '../components/HeadTitle';

    export default {
        name: 'News',
        data () {
            return {
                isTrans: false,
                newsList: window.newsList
            }
        },
        components: {
            HeadTitle
        },
        mounted () {
            setTimeout(() => {
                this.isTrans = true;
            }, 100);
        },
        methods: {
            navNews (url) {
                window.location.href = url
            }
        }
    }
</script>

<style lang="scss" scoped>
    .news {
        position: relative;

        .news-list {
            width: 100%;
            height: auto;
            margin-top: 34px;
            margin-bottom: 35px;
            overflow-y: auto;
        }

        .news-item {
            margin: 0 auto 14px;
            width: 345px;
            height: 91px;
            background: #DDDDDD;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 2px 2px 8px 1px rgba(51,51,51,0.19);
        }

        .news-img {
            width: 122px;
            height: 91px;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: cover;
            background-color: rgba(0, 0, 0, 0.3);
        }

        .news-msg {
            box-sizing: border-box;
            width: 345px - 135px;
            height: 71px;
            padding: 5px 2px 10px 10px;
            font-size: 14px;
            font-weight: 400;
            color: #333;
            line-height: 23px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3; // 要显示的行数
            -webkit-box-orient: vertical;
        }
    }
</style>
