<template>
    <div class="page schedule">
        <HeadTitle title="活动流程" />
        <div class="schedule-list">
            <div class="schedule-item">
                <div class="sch-base ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.7s" swiper-animate-delay="0.01s">
                    <div class="sch-time">09:30-09:50</div>
                    <div class="sch-theme">暖场预热</div>
                </div>

                <div class="sch-detail ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.7s" swiper-animate-delay="0.01s">
                    <p>
                        活动现场签到
                    </p>
                    <p>
                        《Hi，Chinagoods》
                        <br>暖场视频
                    </p>
                </div>
            </div>

            <div class="schedule-item">
                <div class="sch-base ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.7s" swiper-animate-delay="0.1s">
                    <div class="sch-time">09:50-10:00</div>
                    <div class="sch-theme">上线发布</div>
                </div>

                <div class="sch-detail ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.7s" swiper-animate-delay="0.1s">
                    <p>
                        倒计时开场
                    </p>
                    <p>
                        《数创义乌 贸易未来》<br>Chinagoods平台宣传视频
                    </p>
                    <p>
                        商城集团董事长赵文阁致辞
                    </p>
                    <p>
                        Chinagoods平台<br>正式上线启动仪式
                    </p>
                </div>
            </div>

            <div class="schedule-item">
                <div class="sch-base ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.7s" swiper-animate-delay="0.1s">
                    <div class="sch-time">10:00-11:05</div>
                    <div class="sch-theme">演讲分享</div>
                </div>

                <div class="sch-detail ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.7s" swiper-animate-delay="0.1s">
                    <p>
                        《能源舞者》节目表演
                    </p>
                    <p>
                        《与Chinagoods与你携手共进》<br>主题发言
                    </p>
                    <p>
                        《感恩有你》<br>平台优秀体验官颁奖
                    </p>
                    <p>《遇见Chinagoods 》<br>
                        TED故事分享
                    </p>
                    <p>
                        《数字贸易给义乌带来的新机遇》<br>特邀嘉宾，主题演讲
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeadTitle from '../components/HeadTitle';
    export default {
        name: 'Schedule',
        data () {
            return {
            };
        },
        components: {
            HeadTitle
        },
        methods: {
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .schedule {
        background-color: #F2F2F2;
        background-size: 100% 100%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        .schedule-list {
            margin-top: 34px;
            margin-bottom: 35px;
            position: relative;
            padding-top: 10px;
            padding-bottom: 10px;
            overflow-y: auto;
            background: url("../assets/imgs/sch-bg.png") no-repeat 50% 100px;
            background-size: 100% auto;
            &:after {
                position: absolute;
                content: '';
                width: 2px;
                height: 100%;
                background: #207EC2;
                left: 125px;
                top: 0;
            }
        }
        .schedule-item {
            width: 350px;
            margin: 20px auto 40px;
            display: flex;
            justify-content: space-between;
        }
        .sch-base {
            width: 100px;
            text-align: center;
        }
        .sch-time {
            width: 100px;
            font-size: 14px;
            font-weight: 400;
            color: #fff;
            background: #cf423e;
            margin-bottom: 7px;
            padding: 2px 0;
        }
        .sch-theme {
            width: 100px;
            font-size: 19px;
            font-weight: bold;
            color: #cf423e;
        }
        .sch-detail {
            width: 225px;
            font-size: 15px;
            color: #207EC2;
            line-height: 25px;
            font-weight: bold;
            p {
                padding-bottom: 20px;
                margin-bottom: 8px;
                position: relative;
                &:after {
                    width: 13px;
                    height: 16px;
                    position: absolute;
                    content: '';
                    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA0CAYAAAAqunDVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFCklEQVRogd3ZW4xlRRUG4G+0hURiNMZLTHygBIOYKDFhQmIsJkogQKKJAYkCQ0R5EIgoKuMASll4GRyH8QJeQLyMo1wUIUERRycSrBeMoogTjKIUCpEHUCEiowRpH2q3dtqe7rPP2ecM8r90eletVf+fv3adVWuv2f+CHx9Yc/ydpwBCKs/Fv+bwYEjlsJrjT/Y2qQGwtua4Y838/LyQysm4tub4j73NalyEVF6Nv9Ycfz3XPfsuTscn9x6t8RFSeQbW1Rw3wRzUHB8KqTw9pPL/+n6diW8u/DO3aOAL+DzWz5rRJAipvBgH1hx/v/DsP6Jqjo+EVHaFVN5Yc7x+rzAcD5vxwcUP5pZMuBQ7Qyo7ao6PzozWmAipHIVHF7vEElE1x7+HVK7GefjADPn1RkhlX2zFMUvHljoFl2NXSOWrT/JD42zcUnO8d+nA/4iqOe4OqWzG53DUDMj1Rnc4vBevXG58OafgKzgvpHJ8zfHaaZGbAFuxreZ4/3KDa+bn55eNCqm8DRfg5U+mQyOk8lrcgFBzfHC5OXtyCr6Gc7ABHxqc3RgIqczhEmzZkyBWcKpLchy24+Ca4x8GZ9kTIZV343y8tOb40J7mreQUXIdzcTGOH45ef4RUXqjtmI+sJIhVnOqSHYkf4Iia44+GItkXIZUrcCwOqDnuXmnuqqK6hDfjeXhVzfHxQVj2QEhlLW7FGTXHy1abv9r2W8DGLunp2os6M4RU1uAzuBtfGiVmJKe65NdjHQ6qOT4wLsm+CKmcgm04seZ41SgxozpFO3V+hQ/jHf3p9UdI5Vm4CLfjmlHjRnaqW2QbTsahNcdf9CXZFyGVi/B+HFtzvGnUuL6i9sdv8FPEmuPowT0RUjkAd+LWmuO6PrF9tp+a4z0hlcvwTpyIb/SJ74lPYR/tkOqFXk5BSOVFuAsP42U1x7/1XXSENY7B9/CdmuMb+sb3cgpqjveHVD6tXSTP7f4OhpDKPlpX6wljXlR7i+rwCe0EPDukcnnN8Z4x8yyHM3EQvl5zvGOcBGOJ6lpqH8MWrfFxwjh5liKk8nztuvOYJc2UPhjXKfisdmC8KaQSa45lglwLSHgOtk7ifu+DYjG6dvV2/AyH1RyfmCDXwbgDj2h9vD+Pm2sSp+BKvAeH4iRN4Li4uOOzaRJBTOgUhFSOwE7cp9WFva/+Xf9uB+7tcqx4tVgNE4vqSN2Eo5Fqjhf2jJ3Dz/EKnFJznMRtTL79FrBBa6dtCKlcUXP8U4/Yt2uCbjdQhTKIUxBS+TJO1VpXbx0x5tn4LV6AI2uOO4fgMpRTtN+XN2N9SOWSmuNtI8Scrwn64VCCGFBUzfG+rnzaqJU5h680P6QScJZWDp0zFA+GdQo+jtMQQyrH1Ry/vcLczdgX22uOvxySxGDv1AJCKu/Srg13a93dfy4z5zUo2K1V+n8cksPQTtG+Rp6Fl2hl1JbFgyGVp/nvt+VLhxbEFJyCkMoJWk/hYa2b+sCisfVaS/svWg9vxcbkOJiGU/AtvA9rkXEGhFT2w6ZuzkenIYgpOQUhlcNxCx7HITXHO0MqSWsdV+1demwaa09NFIRUbsDr8X2tcrgLz8RJNccrp7XutLbfAjZq32SPxo2aoNswUlNyXEzVKQipfFH77VrA62qON09zzWk7RSuf3oL9cOO0BTEDpyCkcqFW5x1Sc9w17fVm4RSt+zQ3C0HMyKlZY1ZOzRRPSVH/Bssl2QrnjDoUAAAAAElFTkSuQmCC") no-repeat;
                    background-size: 100% auto;
                    left: 40px;
                    bottom: 0;
                }
                &.no-arrow {
                    &:after {
                        content: none;
                    }
                }
            }
        }
    }
</style>
