<template>
    <div class="page show" id="Show">
        ...
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Show',
        data () {
            return {
                isTrans: false,
                showList: window.showList
            }
        },
        mounted () {
            setTimeout(() => {
                this.isTrans = true;
            }, 100);
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .show {
        position: relative;
    }
</style>
