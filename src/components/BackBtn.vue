<template>
    <a class="go-home btn" href="javascript:void(0);" v-on:click="goHome">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAA/1BMVEUAAABAQEAgICA5OTkzMzMuLi4qKionJyc3NzczMzMwMDAtLS0rKys2NjYzMzMuLi4xMTE1NTUxMTEyMjIzMzMyMjI0NDQxMTEyMjIyMjI0NDQ1NTU0NDQ0NDQyMjIyMjIyMjIyMjIyMjI0NDQzMzMzMzMzMzMyMjIyMjIzMzMyMjI0NDQzMzMzMzMzMzMzMzMyMjIzMzMyMjI0NDQzMzMzMzM0NDQzMzMzMzMzMzMyMjIyMjI0NDQzMzMzMzMyMjIzMzMzMzMzMzMzMzMyMjIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyMjIzMzMzMzMzMzMyMjIzMzMzMzMyDzMzAAAAVHRSTlMABAgJCgsMDQ4PEBESExQcLzA0ODw9QENHSEpNU1lbYGFlZmdtbnN1enyEipGSl6qsuLu8vr/BwsPExcbGyMnKzM3Oz9DR5uft7/L09vf4+fv8/f43j2MaAAAA2klEQVQYGe3BxUICARSG0V+JGRFsxQ7sVmxEsREs4nv/Z/G6HDfMZT3nKJFIxBYcN08G5RdWgJLcwipmTV5Dd5hqSk65e0wlkFOuhrkO5DT8gLnKyin/iLnMyKnwhLnIyKnwjDlPy2nkBXOWllP4iimn5HXAn5tyL6c7A4qoE9eGIr6I61ARt8TUGFfEbAdzVOxlJq9/Sh2gtSy/lTbQXpXfUgvorMtv8Qfobspv4Rvobstv7hOzK7/iB2ZPftNNzL78JhuYeflNvANb6sNYnbdR9SM7FSqRSOgXSQ5fAZkIQyEAAAAASUVORK5CYII=" alt="">
        <span>返回</span>
    </a>
</template>

<script>
    export default {
        methods: {
            goHome () {
                this.$router.back();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .go-home.btn {
        position: fixed;
        width: 100px;
        height: 30px;
        background: #FFFFFF;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
        border-radius: 21px;
        bottom: 22px;
        left: 50%;
        margin-left: -50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #333;
        background: rgba(255,255,255,1);
        opacity: 0.75;
        transform: none;
        z-index: 999999;
        img {
            width: 28px;
            height: 28px;
            margin-right: 5px;
        }
        &:active {
            opacity: .8;
        }
    }

</style>
