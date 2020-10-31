<template>
    <div class="music">
        <!-- 音乐播放控件 -->
        <div class="audioCon">
            <audio autoplay
                   id="audio" loop="loop" src="https://cloud-app-1302175274.file.myqcloud.com/apps/china-goods-publish/music.mp3"></audio>
            <div class="abs play-pauseZ">
                <p class="playZ"></p>
                <p class="pauseZ"></p>
                <p class="loadingZ"></p>
            </div>
            <div class="scrubberZ">
                <div class="progressZ"></div>
                <div class="loadedZ"></div>
            </div>
            <div class="timeZ"><em class="playedZ"></em>/<strong class="durationZ"></strong>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {}
    };
</script>

<style lang="scss">
    .audioCon {
        position: fixed;
        width: 30px;
        height: 30px;
        -webkit-background-size: cover;
        background-size: cover;
        right: 10px;
        top: 10px;
        z-index: 99999;
        -webkit-animation: none;
        border-radius: 50%;
        background-image: url(https://7765-wedding-wxapp-1302175274.tcb.qcloud.la/apps/science-week/static/music_pause.png)
    }

    .audioCon.playingZ {
        background-image: url(https://7765-wedding-wxapp-1302175274.tcb.qcloud.la/apps/science-week/static/music.png);
        -webkit-animation: audio 2s linear infinite
    }

    @-webkit-keyframes audio {
        0% {
            -webkit-transform: rotate3d(0, 0, 1, -360deg);
            transform: rotate3d(0, 0, 1, -360deg)
        }
        50% {
            -webkit-transform: rotate3d(0, 0, 1, -180deg);
            transform: rotate3d(0, 0, 1, -180deg)
        }
        100% {
            -webkit-transform: rotate3d(0, 0, 1, 0deg);
            transform: rotate3d(0, 0, 1, 0deg)
        }
    }

    .audioCon .play-pauseZ {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0
    }

    .audioCon .scrubberZ,
    .audioCon .timeZ {
        display: none
    }
</style>
