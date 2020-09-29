<template>
    <div class="year" id="year">
        <transition name="text">
            <img alt="" class="index-logo" src="../assets/imgs/index-logo.png" v-show="isTrans">
        </transition>
        <transition name="text">
            <img alt="" class="index-tips" src="../assets/imgs/index-tips.png" v-show="isTrans">
        </transition>

        <div class="header-title">
            <p class="header-title-main">科技活动周20周年回顾</p>
            <p class="header-title-second">20TH ANNIVERSARY REVIEW</p>
        </div>

        <div class="schedule">

            <div class="schedule-list">
                <div :key="index" @click="navDetail(index, item)" class="schedule-item"
                     v-for="(item, index) in yearList">
                    <div class="schedule-year">
                        {{item.year}}
                    </div>
                    <div class="schedule-text">
                        {{item.text}}
                    </div>
                    <div class="schedule-link" v-show="item.desc || item.imgs">
                        查看详情
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'year',
        data () {
            return {
                isTrans: false,
                yearList: window.yearList
            }
        },
        mounted () {
            this.isTrans = true
        },
        methods: {
            navDetail (index, item) {
                if (!item.desc && !item.imgs) {
                    return false;
                }
                this.$router.replace({
                    name: 'yearDetail',
                    query: {
                        index: parseInt(index)
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .year {
        position: relative;
        width: 100%;
        height: calc(100vh - 135px);
        background-size: 100% 100%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        overflow: hidden;
        overflow-y: auto;

        .schedule {
            width: 670px;
            margin: 0 auto 50px;
            overflow: auto;
            position: relative;

            &:after {
                content: '';
                position: absolute;
                left: 50%;
                bottom: 4px;
                transform: translate3d(-222px, 0, 0);
                height: 44px;
                width: 14px;
                background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAsCAYAAABVLInsAAABOUlEQVRIiZ2UQU4CQRBFn8PCGJeoeAB1wRG8B4fgdqKsCEsSuQDB6FrFEFaGuDA6pEg3acfu6ar+m5lJz6//q+t3H9V1fQsM0GEIHMufQuwDCyXxACHK+wtwZSFW7nlnVfTEeyvRW+0AK+DMqvgDjC2KVfA+shC9VcEpsAZOrIpbYKpVrBrfaruhVUEPeIsUzCp+AHONYqyyym6MqEpRjPgEPJcQ0YQ+Rcz22RxHWPAduLAq/uZC3zboVrspqwIJ+yYV+jbFL2CSWsxlMjmWNquCc7e7HauiHOzH2EL2+KR2N2dVcB3LrkZRbvllCZHYUdMS/41F06MXeAUurYoS+odmJS3+jEVrFRf2tbvxTYph6L8tRAK7W4tVQddd2p9WRTnYM4w9euztlhD38bP26DErURSMyhThZgdiCVzrEFuo0AAAAABJRU5ErkJggg==") no-repeat 50% 100%;
                background-size: 14px 44px;
            }

            &:before {
                content: '';
                position: absolute;
                left: 50%;
                top: 0;
                transform: translate3d(-211px, 0, 0);
                height: calc(100% - 13px);
                width: 4px;
                background: #fff;
            }

            &-list {
                padding-top: 80px;
                padding-bottom: 80px;
            }

            &-item {
                width: 100%;
                display: flex;
                align-items: center;
                font-size: 38px;
                font-weight: 400;
                margin-bottom: 70px;
            }

            &-year {
                width: 80px;
                padding-right: 49px;
                font-size: 40px;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                position: relative;

                &:after {
                    position: absolute;
                    content: '';
                    width: 19px;
                    height: 19px;
                    border-radius: 50%;
                    background: #fff;
                    right: -5px;
                    bottom: 19px;
                }
            }

            &-text {
                width: 400px;
                min-height: 51px;
                margin-left: 30px;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                padding: 10px 15px;
                font-size: 27px;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                white-space: pre-line;
                word-break: break-word;
                border-radius: 16px;
                background: rgba(255, 255, 255, 0.5);
            }

            &-link {
                margin-left: 12px;
                margin-right: 1px;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                padding: 5px 7px;
                font-size: 24px;
                font-weight: 400;
                color: #00ffda;
                white-space: nowrap;
                border-radius: 12px;
                border: 2px solid #00ffda;
            }
        }
    }
</style>
