<template>
    <div class="info" id="Info">
        <transition name="text">
            <img alt="" class="index-logo" src="../assets/imgs/index-logo.png" v-show="isTrans">
        </transition>
        <transition name="text">
            <img alt="" class="index-tips" src="../assets/imgs/index-tips.png" v-show="isTrans">
        </transition>

        <div class="header-title">
            <p class="header-title-main">活动流程</p>
            <p class="header-title-second">ACTIVITY FLOW</p>
        </div>

        <div class="schedule">

            <div class="schedule-list">
                <div :key="index" class="schedule-item" v-for="(item, index) in schList">
                    <div class="schedule-text">
                        {{item.text}}
                    </div>
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
                schList: window.schList
            }
        },
        mounted () {
            this.isTrans = true
        }
    }
</script>

<style lang="less" scoped>
    .info {
        position: relative;
        width: 100%;
        height: calc(100vh - 135px);
        background-size: 100% 100%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        overflow: hidden;
        overflow-y: auto;

        .schedule {
            width: 550px;
            margin: 0 auto;

            &-list {

            }

            &-item {
                width: 100%;
                text-align: center;
                white-space: pre-line;
                word-break: break-word;
                font-size: 38px;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                margin-bottom: 50px;
                line-height: 60px;
                background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAABFElEQVRIia3SMU4CQRiG4U+0IYGKgkRLCmNMOAEhsZKaC9hYGDgA3sA7UFF4CeJRvAaU+poBx2zGnZ3/Z9lkit3Jvs/szgi4AsaAzjj6wF3odSR9S5pImuo8V1/SUtLXofa76vAVC2Da8ivCyl+B2/isOtkW+RdPgTZIbbwOOAXJxiPQA+5PRHLxv2a4GQBbYOZEmuIb4KX6i0ZOpBQPcxfpHlgRc7xuk0vIoyeeO0VNyLMnHoHwwtyIpCMXvwaeIrDieK2cSC5+A3wCO6AbHlwC706kFN8DD9U98CDmeLrJFmTuidedohLy4YnnjmkTMvTEc0AJMcebgBJiipeAHGKOW4AUefPErUCKmOMeICJrTxzQD842EUr+fWHeAAAAAElFTkSuQmCC") no-repeat 50% 100%;
                background-size: 24px 25px;

                &:nth-last-child(1) {
                    background: none;
                }
            }

            &-text {
                padding-bottom: 60px;
            }
        }
    }
</style>
