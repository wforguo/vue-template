<template>
    <div class="index" id="Home">
        <img alt="" class="index-logo" src="../assets/imgs/index-logo.png" v-show="isTrans">
        <img alt="" class="index-tips" src="../assets/imgs/index-tips.png" v-show="isTrans">

        <transition name="text">
            <img alt="" class="index-2020" src="../assets/imgs/2020.png" v-show="isTrans">
        </transition>

        <transition name="text">
            <img alt="" class="index-slogan" src="../assets/imgs/index-slogan.png" v-show="isTrans">
        </transition>

        <transition name="text">
            <img alt="" class="index-title" src="../assets/imgs/index-title.png" v-show="isTrans">
        </transition>

        <transition name="text">
            <div class="index-gov" v-show="isTrans">
                <p class="index-gov-title">主办单位：</p>
                <p>浙江省科学技术厅 <span></span> 中共浙江省委宣传部 <span></span> 浙江省卫生健康委员会</p>
                <p>浙江省科学技术协会 <span></span> 杭州市人民政府 <span></span> 江干区人民政府</p>
            </div>
        </transition>

        <transition name="text">
            <img alt="" class="index-city" src="../assets/imgs/bottom-city.png" v-show="isTrans">
        </transition>
        <transition name="text">
            <img alt="" class="index-city-shadow" src="../assets/imgs/bottom-city-shadow.png" v-show="isTrans">
        </transition>

    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        data () {
            return {
                isTrans: false
            }
        },
        mounted () {
            this.isTrans = true
        }
    }
</script>

<style lang="less" scoped>
    .index {
        position: relative;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        overflow: hidden;

        &-2020 {
            position: absolute;
            width: 487px;
            height: 257px;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -390px, 0);

            &.text-enter {
                opacity: 0;
            }

            &.text-enter-active {
                transition: all 1.5s 300ms;
            }
        }

        &-slogan {
            position: absolute;
            width: 622px;
            height: 34px;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -180px, 0);

            &.text-enter {
                opacity: 0;
            }

            &.text-enter-active {
                transition: all 1.5s 600ms;
            }
        }

        &-title {
            position: absolute;
            width: 525px;
            height: 62px;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -30px, 0);

            &.text-enter {
                opacity: 0;
            }

            &.text-enter-active {
                transition: all 1.5s 1000ms;
            }
        }

        &-gov {
            position: absolute;
            width: 600px;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, 300px, 0);
            text-align: center;
            color: #fff;
            font-size: 20px;
            line-height: 38px;

            &.text-enter {
                opacity: 0;
            }

            &.text-enter-active {
                transition: all 1.5s 1400ms;
            }

            &-title {
                font-weight: bolder !important;
                opacity: 1 !important;
            }

            span {
                display: inline-block;
                margin: 0 6px;
            }

            p {
                opacity: 0.85;
                font-weight: normal;
            }
        }

        &-city {
            position: absolute;
            width: 750px;
            height: 185px;
            bottom: 141px;
            left: 50%;
            transform: translate3d(-50%, 0, 0);

            &-shadow {
                position: absolute;
                width: 750px;
                height: 141px;
                bottom: 0px;
                left: 50%;
                transform: translate3d(-50%, 0, 0);
            }

            &.text-enter {
                opacity: 0;
            }

            &.text-enter-active {
                transition: all 1.5s 300ms;
            }
        }
    }
</style>
