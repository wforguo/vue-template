<template>
    <div class="show" id="show">
        <div class="show-container">
            <transition name="text">
                <img alt="" class="index-logo" src="../assets/imgs/index-logo.png" v-show="isTrans">
            </transition>
            <transition name="text">
                <img alt="" class="index-tips" src="../assets/imgs/index-tips.png" v-show="isTrans">
            </transition>

            <div class="divider"></div>

            <div class="show-img">
                <img :alt="yearData.title" :key="index * Math.random()" :src="item"
                     v-for="(item, index) in yearData.imgs"/>
            </div>

            <div class="show-desc">
                <div :key="index * Math.random()" class="show-desc-item" v-for="(item, index) in yearData.desc">
                    {{item}}
                </div>
            </div>

            <div class="no-data"
                 v-if="(!yearData.imgs && !yearData.desc) || ( yearData.desc.length <= 0 &&  yearData.imgs.length <= 0)">
                暂无数据~
            </div>
            <div @click="navBack" class="back-btn">返回</div>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src

    const yearList = window.yearList;
    export default {
        name: 'yearDetail',
        data () {
            return {
                isTrans: false
            }
        },
        props: {
            index: {}
        },
        computed: {
            yearData () {
                return yearList[this.$route.query.index] || {}
            }
        },
        mounted () {
            this.isTrans = true;
        },
        methods: {
            navBack () {
                this.$router.replace({
                    name: 'year'
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .show {
        position: relative;
        width: 100%;
        height: calc(100vh - 135px);
        background-size: 100% 100%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        overflow: hidden;

        .divider {
            width: 100%;
            margin-bottom: 200px;
        }

        &-container {
            width: 100%;
            height: 100%;
            overflow: hidden;
            overflow-y: auto;
        }

        &-title {
            margin: 87px auto;
            font-size: 50px;
            font-weight: 400;
            color: rgba(255, 253, 253, 1);
            text-align: center;

            &-txt {
                white-space: pre-line;
                word-break: break-word;
                max-width: 660px;
                min-width: 330px;
                padding: 10px 27px;
                border-radius: 16px;
                background: rgba(255, 255, 255, 0.3);
            }
        }

        &-img {
            width: 582px;
            margin: 81px auto 0;

            img {
                width: 582px;
                margin: 0 auto 51px;
                height: auto;
                background: #ccc;
            }
        }

        &-desc {
            width: 624px;
            margin: 0 auto 70px;
            font-size: 26px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 55px;

            &-item {
                text-indent: 2em;
                text-align: justify;
                white-space: pre-line;
                word-break: break-word;
            }
        }

        .back-btn {
            position: absolute;
            bottom: 100px;
            right: 10px;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: #000;
            background: rgba(255, 255, 255, 1);
            opacity: 0.75;
            transform: none;
        }
    }

</style>
