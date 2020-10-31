<template>
    <div class="head-title">
        <p>
            {{title}}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'HeadTitle',
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .head-title {
        width: 375px;
        height: 193px;
        margin: 0 auto;
        text-align: center;
        position: relative;
        padding-bottom: 34px;
        background: url("../assets/imgs/title-bg.png") no-repeat 50% 0;
        background-size: 100% 100%;
        &:after {
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translate3d(-50%, 0, 0);
            content: '';
            width: 114px;
            height: 2Px;
            background: #207EC2;
        }
        p {
            width: 100%;
            position: absolute;
            text-align: center;
            left: 0;
            right: 0;
            bottom: 30px;
            font-size: 37px;
            font-weight: bold;
            color: #207EC2;
            font-style: italic;
        }
    }

</style>
