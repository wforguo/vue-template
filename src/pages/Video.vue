<template>
    <div class="page video" id="Video">
        <HeadTitle title="视频直播" />

        <div class="video-container">

            <div class="video-box" id="videoBox">

                <swiper @click="stopAudio" ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="(item, index) in videoList" :key="index">
                        <div class="video-swipe">
<!--                            <video :style="{backgroundImage: 'url(' + item.pic + ')'}" controls="" :id="'video' + index"-->
<!--                                   :name="'media' + index"-->
<!--                                   v-if="item.type === 'video' && item.src"-->
<!--                                   width="100%"-->
<!--                                   x-webkit-airplay="true"-->
<!--                                   webkit-playsinline="true"-->
<!--                                   x5-video-player-fullscreen="true"-->
<!--                                   playsinline="true"-->
<!--                                   x5-video-player-type="h5"-->
<!--                                   :poster="item.pic"-->
<!--                                   control="false"-->
<!--                            >-->
<!--                                <source :src="item.src" type="video/mp4">-->
<!--                            </video>-->

                            <video
                                :style="{backgroundImage: 'url(' + item.pic + ')'}" controls="" :id="'video' + index"
                                :name="'media' + index"
                                v-if="item.type === 'video' && item.src"
                                width="100%"
                                x-webkit-airplay="true"
                                webkit-playsinline="true"
                                x5-video-player-fullscreen="true"
                                playsinline="true"
                                x5-video-player-type="h5"
                                :poster="item.pic"
                                control="false"
                                class="video-js"
                                preload="auto"
                                data-setup='{}'>
                                <source :src="item.src" type="video/mp4">
                            </video>
                            <div :style="{backgroundImage: 'url(' + item.pic + ')'}" @click="navLive(item.src)"
                                 class="live"
                                 v-if="item.type === 'live' || !item.src"
                            >
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
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
    import { Dialog } from 'vant';
    // @ is an alias to /src
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    // import style (>= Swiper 6.x)
    import 'swiper/swiper-bundle.css'
    // import style (<= Swiper 5.x)

    import 'video.js/dist/video-js.css'

    import 'swiper/swiper.scss'

    import HeadTitle from '../components/HeadTitle';

    import Video from 'video.js'
    /* 不能直接引入js，否则会报错：videojs is not defined
    import 'video.js/dist/lang/zh-CN.js' */
    import videoZhCN from 'video.js/dist/lang/zh-CN.json'
    import videoEn from 'video.js/dist/lang/en.json'

    Video.addLanguage('zh-CN', videoZhCN);
    Video.addLanguage('en', videoEn);

    export default {
        name: 'Video',
        data () {
            return {
                swiperOptions: {
                    speed: 800,
                    mousewheel: true,
                    paginationClickable: true,
                    centeredSlides: true,
                    slidesPerView: 1.22,
                    initialSlide: 1, // 初始位置
                    watchActiveIndex: true,
                    on: {
                        transitionEnd: (swipe) => {
                            console.log('过渡结束', swipe.activeIndex);
                            this.current = swipe.activeIndex;
                            let $video = document.getElementsByTagName('video');
                            for (let i = 0; i < $video.length; i++) {
                                $video[i].pause();
                            }
                        }
                    }
                },
                isTrans: false,
                videoList: window.videoList,
                current: 0
            }
        },
        computed: {
            swiper () {
                return this.$refs.mySwiper.$swiper
            }
        },
        components: {
            HeadTitle,
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
        },
        mounted () {
            setTimeout(() => {
                this.isTrans = true;
            }, 100);
        },
        methods: {
            navLive (src) {
                if (src) {
                    window.location.href = src;
                } else {
                    Dialog.alert({
                        title: '提示',
                        message: '敬请期待！'
                    })
                }
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
                let $video = document.getElementsByTagName('video');
                for (let i = 0; i < $video.length; i++) {
                    $video[i].pause();
                }
                this.current = index;
                this.swiper.slideTo(index, 500, true);
            }
        }
    }
</script>
<style lang="scss">
    .swiper-slide {
        width: 292px;
        height: 164px;
    }
    .video-js .vjs-big-play-button {
        position: absolute;
        width: 60px;
        height: 60px;
        overflow: hidden;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        background: url('data:image/png;base64,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') no-repeat 50% 50%;
        background-size: 100%;
        border: 0;
        span {
            display: none;
        }
    }
</style>
<style lang="scss" scoped>
    .video {

        &-container {
            width: 375px;
            margin: 45px auto;
        }

        &-inner {
        }

        &-box {
            width: 375px;
            height: 164px;
            margin: 0 auto;
            .video-swipe {
                position: relative;
                width: 292px;
                height: 164px;
            }
            .video-js {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                width: 292px;
                height: 164px;
                margin: 0 auto;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                transform: none;
                transition: none;
            }
            video {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                width: 292px;
                height: 164px;
                margin: 0 auto;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                transform: none;
                transition: none;
            }

            .live {
                width: 292px;
                height: 164px;
                margin: 0 auto;
                position: relative;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-position: 50% 50%;

                &:after {
                    content: '';
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    overflow: hidden;
                    border-radius: 50%;
                    left: 50%;
                    top: 50%;
                    transform: translate3d(-50%, -50%, 0);
                    background: url('data:image/png;base64,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') no-repeat 50% 50%;
                    background-size: 100%;
                }
            }
        }

        &-slide {
            width: 360px;
            margin: 53px auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: nowrap;

            &-item {
                margin: 0 5px;
                font-size: 12px;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                padding: 4px 8px;
                background: #207EC2;
                border-radius: 2px;
                position: relative;
                transition: ease transform 300ms;
                text-align: center;
                opacity: 0.8;
                transform: scale3d(0.9,0.9,0.9);
                &.active {
                    color: rgba(254, 254, 255, 1);
                    transform: scale3d(1,1,1);
                    opacity: 1;
                    &:after {
                        content: '';
                        width: 30px;
                        height: 2px;
                        background: #207EC2;
                        position: absolute;
                        left: 50%;
                        bottom: -10px;
                        transform: translate3d(-50%, 0, 0);
                        border-radius: 1px;
                    }
                }
            }

            &-title {

            }
        }
    }

</style>
