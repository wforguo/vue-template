<template>
    <div class="show" id="show">
        <transition name="text">
            <img alt="" class="index-logo" src="../assets/imgs/index-logo.png" v-show="isTrans">
        </transition>
        <transition name="text">
            <img alt="" class="index-tips" src="../assets/imgs/index-tips.png" v-show="isTrans">
        </transition>

        <div class="header-title">
            <p class="header-title-main">云上展厅</p>
            <p class="header-title-second">CLOUD EXHIBITION HALL</p>
        </div>

        <div class="show-list">
            <div :key="index" @click="navDetail(index)" class="show-item" v-for="(item,index) in showList">
                <div :alt="item.title" :style="{backgroundImage: 'url(' + item.logo + ')'}" :title="item.title"
                     class="show-img" v-if="item.logo"></div>
                <div class="show-title" v-else>{{item.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'show',
        data () {
            return {
                isTrans: false,
                showList: window.showList
            }
        },
        mounted () {
            this.isTrans = true
        },
        methods: {
            navDetail (index) {
                console.log(index);
                this.$router.replace({
                    name: 'showDetail',
                    query: {
                        index: parseInt(index)
                    }
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
        overflow-y: auto;

        &-list {
            width: 648px;
            margin: 0 auto 50px;
            display: flex;
            flex-wrap: wrap;
        }

        &-item {
            width: 197px;
            height: 66px;
            margin: 16px 9px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            border-radius: 8px;
        }

        &-img {
            width: 133px;
            height: 38px;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: contain;
        }

        &-title {
            width: 100%;
            display: flex;
            align-items: center;
            text-align: center;
            font-size: 20px;
            color: #000;
        }
    }
</style>
