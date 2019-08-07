<template>
    <div class="login">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">登录</h1>
        </header>
        <div class="formBox">
            <input type="text" v-model="loginForm.username" placeholder="用户名">
            <input type="password" v-model="loginForm.password" placeholder="密码">
            <van-button type="primary" @click="login">登录</van-button>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            loginForm: {
                username: "admin",
                password: "123456"
            },
            userToken: "",
            userName: ""
        };
    },
    methods: {
        // ...mapMutations(["changeLogin"]),
        login() {
            let _this = this;
            if (
                this.loginForm.username === "" ||
                this.loginForm.password === ""
            ) {
                alert("账号或密码不能为空");
            } else {
                this.$axios({
                    method: "post",
                    url: "http://47.101.205.157:3000/login",
                    data: _this.loginForm
                })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.code === 200) {
                            _this.userToken = res.data.data.token;
                            _this.userName = res.data.data.username;
                            // 将用户token保存到vuex中
                            this.$store.commit("changeLogin", {
                                Authorization: _this.userToken,
                                username: _this.userName
                            });
                            Toast('登录成功');
                            _this.$router.push("/home");
                        } else {
                            Toast("账号或密码错误");
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
};
</script>
<style lang="scss">
* {
    touch-action: pan-y;
}
.login {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1000;
    // background-color: #fff;
    text-align: center;
    background-image: url("../assets/img/loginImg.jpeg");
    background-size: 110% auto;
}
.formBox {
  margin-top: 50%;
    input{
      width:80%;
    }
    button {
        width: 40%;
    }
}
</style>
