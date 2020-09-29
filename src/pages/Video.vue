<template>
    <div class="video" id="video">
        <transition name="text">
            <img alt="" class="index-logo" src="../assets/imgs/index-logo.png" v-show="isTrans">
        </transition>
        <transition name="text">
            <img alt="" class="index-tips" src="../assets/imgs/index-tips.png" v-show="isTrans">
        </transition>

        <div class="header-title">
            <p class="header-title-main">视频直播</p>
            <p class="header-title-second">LIVE VIDEO</p>
        </div>

        <div class="video-container">

            <div @click="stopAudio" class="video-box" id="videoBox">
                <div :key="index * Math.random()" class="video-inner" v-for="(item, index) in videoList">
                    <video :style="{backgroundImage: 'url(' + item.pic + ')'}" controls="" height="434" id='video1'
                           name="media"
                           playsinline="true"
                           v-if="video.type === 'video' && current === index"
                           webkit-playsinline="true"
                           width="100%"
                           x-webkit-airplay="true"
                           x5-video-player-fullscreen="true"
                           x5-video-player-type="h5"
                    >
                        <source :src="item.src" type="video/mp4">
                    </video>
                    <div :style="{backgroundImage: 'url(' + item.pic + ')'}" @click="navLive(video.src)"
                         class="live"
                         v-if="video.type === 'live' && current === index"
                    >
                    </div>
                </div>
            </div>

            <div class="video-slide">
                <div :class="{'active' : current === index}" :key="index" @click="videoPlay(index)" class="video-slide-item"
                     v-for="(item, index) in videoList">
                    <div class="video-title">{{item.title}}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'info',
        data () {
            return {
                isTrans: false,
                videoList: window.videoList,
                current: 0,
                video: window.videoList[0]
            }
        },
        mounted () {
            this.isTrans = true
        },
        methods: {
            navLive (src) {
                window.location.href = src;
            },
            stopAudio () {
                // 暂停音乐播放
                // eslint-disable-next-line no-undef
                $('.audioCon').removeClass('playingZ');
                document.getElementsByTagName('audio')[0].pause();
            },
            videoPlay (index) {
                const myVideo = document.getElementById('video1');
                myVideo && myVideo.pause();
                if (index === this.current) {
                    return false;
                }
                this.current = index;
                this.video = window.videoList[index]
            }
        }
    }
</script>

<style lang="less" scoped>
    .video {
        position: relative;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        overflow: hidden;
        overflow-y: auto;

        &-container {
            width: 750px;
            margin: 60px auto 120px;
        }

        &-inner {
        }

        &-box {
            width: 750px;
            height: 434px;
            margin: 0 auto;
            background: #000;

            video {
                width: 750px;
                height: 434px;
                margin: 0 auto;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                object-fit: fill;
            }

            .live {
                width: 750px;
                height: 434px;
                margin: 0 auto;
                position: relative;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-position: 50% 50%;

                &:after {
                    content: '';
                    position: absolute;
                    width: 120px;
                    height: 120px;
                    overflow: hidden;
                    border-radius: 50%;
                    left: 50%;
                    top: 50%;
                    transform: translate3d(-50%, -50%, 0);
                    background: url("data:image/jpeg;base64,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") no-repeat 50% 50%;
                    background-size: 100%;
                }
            }
        }

        &-slide {
            width: 720px;
            margin: 32px auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: nowrap;

            &-item {
                margin: 0 10px;
                font-size: 27px;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                padding: 4px 9px;
                background: #2369E5;
                border-radius: 8px;
                position: relative;
                transition: ease all 300ms;
                text-align: center;

                &.active {
                    font-size: 34px;
                    font-weight: 400;
                    color: rgba(254, 254, 255, 1);
                    padding: 5px 14px;

                    &:after {
                        content: '';
                        width: 60px;
                        height: 4px;
                        background: #fff;
                        position: absolute;
                        left: 50%;
                        bottom: -20px;
                        transform: translate3d(-50%, 0, 0);
                        border-radius: 2px;
                    }

                    &:before {
                        content: '';
                        width: 282px;
                        height: 79px;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate3d(-50%, -50%, 0);
                        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARoAAABPCAYAAAA0hwpKAAACAklEQVR4nO3dS47TUBBA0QQFpfmz/z0yaBqEhAJGLuInFpDL6Bype+hBDa78ynFy3rbtcvrrdgJ4rOnL/u/T/bJfDBh4sOnLHpqP9+sKDfBo05d/72gAHm3d0XwwWiAyfREaoLRC886Ygcj05QjNZspAYPpiGQyU1jL4rTEDkenLHpqrCQOR6YujE1BaR6erZTAQuR7L4DcmDESmL0IDlFZoLIOByloGP9nRAJGnY0fzZMJAZPryynSB2n5H89mUgcj0xR0NkLvc/yyDgcLlWAa/N14gMn1xdAJyQgPkvL0NlNbb22djBiLTF0cnICc0QG4/Or02ZiAyfTlv23Z8WM+uBni06YujE5ATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExqgsvoiNEDl93FdoQFyQgPkhAbICQ2QExogJzRATmiAnNAAuf3LyV/8yD8QeTl+5P+XCQOR6YujE5ATGiC3H51udjRA5HbsaL6ZMBCZvjg6AbnL/djk6AQUtuPo9Gy8QGT64ugE5I6nTgCF6YunTkDJUyfg/zheqgQoTF+8VAmUpi92NEBp+uKpE1BaT52+GjMQmb7soflpwkBk+mJHA5TWjkZogMoKzQ8jBiLTlz00300YiExffE0EUJq+2NEApbWj8a4TUFnvOrmjASrrjsaOBqisHY3QAJXn0+l0+gN3sErAvX9DTwAAAABJRU5ErkJggg==") no-repeat 50% 50%;
                        background-size: 100% 100%;
                    }
                }
            }

            &-title {

            }
        }
    }
</style>
