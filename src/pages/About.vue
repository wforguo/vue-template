<template>
    <div class="about" id="About">
        <img alt class="about_banner" src="../assets/imgs/about_banner.png">
        <div class="scrollcon">
            <img alt class="about_top" src="../assets/imgs/about_top.png">
            <div class="content_con" v-html="textAboutUs">
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        name: 'about',
        data () {
            return {
                textAboutUs: window.textAboutUs
            }
        },
        computed: {},
        components: {},
        created () {
            let that = this;
            that.$store.commit('updateInitAppReady', true)
        }
    }
</script>

<style lang="less" scoped>
    .about {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 1);

        .about_top {
            display: block;
            padding-top: 62px;
            margin-left: 272px;
        }

        .scrollcon {
            position: absolute;
            width: 100%;
            height: auto;
            left: 0;
            top: 0;
            padding-bottom: 142px;
        }

        .content_con {
            width: 622px;
            margin: 51px auto 0px;
            line-height: 52px;
            font-size: 26px;
            color: #333333;
            text-align: justify
        }

        .about_banner {
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 0
        }
    }
</style>
