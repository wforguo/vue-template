<template>
    <div class="page index" id="Home">

        <transition name="logo">
            <div class="index-logo" v-show="isTrans">
                <img src="../assets/imgs/index-logo.png" alt="">
            </div>
        </transition>

        <transition name="slogan">
            <div class="index-slogan" v-show="isTrans">
                <img src="../assets/imgs/index-slogan.png" alt="">
            </div>
        </transition>

        <transition name="tips">
            <div class="index-tips" v-show="isTrans">
                <img src="../assets/imgs/index-tips.png" alt="">
            </div>
        </transition>

        <transition name="online">
            <div class="index-online" v-show="isTrans">
                <img src="../assets/imgs/index-online.png" alt="">
            </div>
        </transition>

        <transition name="bottom">
            <div class="index-bottom" v-show="isTrans">
                <img src="../assets/imgs/index-bottom.png" alt="">
            </div>
        </transition>

    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Home',
        data () {
            return {
                isTrans: false
            }
        },
        mounted () {
            setTimeout(() => {
                this.isTrans = true;
            }, 100);
        }
    }
</script>

<style lang="scss" scoped>
    .index {
        background-color: #F2F2F2;
        background-image: url("https://cloud-app-1302175274.file.myqcloud.com/apps/china-goods-publish/imgs/index-bg.jpg");
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;

        &-logo {
            position: absolute;
            width: 77px;
            height: 65px;
            top: 55px;
            left: 50%;
            transform: translate3d(-50%, -0, 0);
            img {
                width: 100%;
                height: 100%;
            }
            &.logo-enter {
                opacity: 0;
            }

            &.logo-enter-active {
                transition: all 1s 50ms;
            }
        }

        &-slogan {
            position: absolute;
            width: 308px;
            height: 90px;
            top: 166px;
            left: 50%;
            margin-left: -154px;
            img {
                width: 100%;
                height: 100%;
            }
            &.slogan-enter {
                opacity: 0;
                transform: translate3d(0, -80px, 0);
            }
            &.slogan-enter-active {
                transition: all 1s 250ms;
                transform: none;
            }
        }

        &-tips {
            position: absolute;
            width: 185px;
            height: 50px;
            top: 280px;
            left: 50%;
            margin-left: (-185px/2);
            img {
                width: 100%;
                height: 100%;
            }
            &.tips-enter {
                opacity: 0;
                transform: translate3d(0, -80px, 0);
            }
            &.tips-enter-active {
                transition: all 1s 450ms;
                transform: none;
            }
        }

        &-online {
            position: absolute;
            width: 193px;
            height: 26px;
            top: 50%;
            left: 50%;
            margin-left: (-193px/2);
            margin-top: 170px;
            img {
                width: 100%;
                height: 100%;
            }
            &.online-enter {
                opacity: 0;
            }
            &.online-enter-active {
                transition: all 1s 850ms;
            }
        }

        &-bottom {
            position: absolute;
            width: 136px;
            height: 29px;
            top: 50%;
            left: 50%;
            margin-left: (-136px/2);
            margin-top: 215px;
            img {
                width: 100%;
                height: 100%;
            }
            &.bottom-enter {
                opacity: 0;
            }
            &.bottom-enter-active {
                transition: all 1s 950ms;
            }
        }
    }
</style>
