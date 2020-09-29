<template>
    <div class="hello">
        <h4>====== 云上 - 云开发 ======</h4>

        <template v-if="isLoginSuccss">
            <LoginState v-slot="{ loginState }">
                <h2>登录云开发</h2>
                <p>{{ loginState ? "已登录" : "未登录" }}</p>
            </LoginState>

            <h2>调用云函数</h2>
            <p class="function">
                <Button @click="callFunction">身份校验</Button>
            </p>
        </template>

        <h4>====== 查询结果 ======</h4>

        <div v-for="(item, index) in userList" :key="index">
            <p>姓名：{{ item.userName }}</p>
            <p>手机号：{{ item.userMobile }}</p>
        </div>

    </div>
</template>

<script>
    import { Button } from 'vant';

    export default {
        name: 'HelloWorld',
        data () {
            return {
                isLoginSuccss: null,
                envId: '',
                callFunctionResult: '',
                userList: []
            };
        },
        components: {
            Button
        },
        async created () {
            this.envId = this.$cloudbase.config.env;
            // 以匿名登录为例
            try {
                const auth = this.$cloudbase.auth({ persistence: 'local' });

                if (!auth.hasLoginState()) {
                    await auth.anonymousAuthProvider().signIn();
                }

                console.log('用户id', auth.hasLoginState().user.uid);

                this.isLoginSuccss = true;
            } catch (e) {
                if (e.message.includes('100007')) {
                    this.isLoginSuccss = false;
                }
                console.error(e);
                console.log(e.code);
            }
        },
        methods: {
            async callFunction () {
                try {
                    const res = await this.$cloudbase.callFunction({
                        name: 'china-goods-check-user',
                        data: {
                            userMobile: '10086'
                        }
                    });
                    this.userList = res.result.data;
                } catch (e) {
                    this.userList = [];
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello {
        max-width: 500px;
        margin: 0 auto;
        word-break: break-all;
        font-size: 24px;
        text-align: center;
        color: #fff;
        line-height: 100px;
    }
</style>
