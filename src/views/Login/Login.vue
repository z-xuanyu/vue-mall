<template>
    <div class="login">
        <!-- 登录页logo -->
        <div class="logo">
            <img
                src="data:image/png;base64,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"
            />
        </div>
        <!-- 登录from表单校验 用户名的方式登录-->
        <div class="user-form" v-if="!isPhoneLogin">
            <van-field
                maxlength="11"
                clearable
                type="text"
                v-model="userName"
                placeholder="请输入用户名"
            />
            <van-field type="password" clearable v-model="password" placeholder="请输入密码" />
        </div>
        <!-- 手机号验证码方式登录 -->
        <div class="user-form" v-else>
            <van-field maxlength="11" clearable type="tel" v-model="phone" placeholder="请输入手机号码" />
            <van-field
                maxlength="6"
                v-model="sms"
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
            >
                <van-button
                    slot="button"
                    round
                    size="mini"
                    style="width:2rem"
                    type="primary"
                    @click="VerifyCodeCountdown"
                >{{validateBtn}}</van-button>
            </van-field>
        </div>
        <div class="login-btn">
            <van-button
                :loading="isLoading"
                @click="onLogin"
                loading-text="登录中..."
                color="#fd7792"
                round
                block
                :disabled="isDisabled"
                type="default"
            >登录</van-button>
        </div>
        <div class="login-tips">
            <span @click="onPhoneLogin">手机号登录</span>
            <span>忘记密码</span>
        </div>
        <!-- 第三方登录 -->
        <van-divider>第三方登录</van-divider>
        <div class="otherlogin">
            <div class="weibo">
                <van-icon size="20px" color="#fff" class-prefix="iconfont icon-xinlangweibo"></van-icon>
            </div>
            <div class="weixin">
                <van-icon size="20px" color="#fff" class-prefix="iconfont icon-weixin"></van-icon>
            </div>
            <div class="qq">
                <van-icon size="20px" color="#fff" class-prefix="iconfont icon-icon"></van-icon>
            </div>
        </div>
        <div class="protocol">
            <span>注册即代表您同意</span>
            <span class="user-protocol">&lt;&lt;XXX商城用户协议&gt;&gt;</span>
        </div>
        <!-- 退出登录页面 -->
        <div class="cross-login" @click="handleBack">
            <van-icon size="16px" name="cross"></van-icon>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: "", //用户名
            password: "", //密码
            phone: "", //手机号
            sms: "", //验证码
            isLoading: false, //登录loading
            isPhoneLogin: false, //是否为手机号码登录
            validateBtn: "发送验证码"
        };
    },
    created() {
        this.TispLoginWay();
    },
    methods: {
        //提示用户选择登录方式
        TispLoginWay() {
            this.$dialog
                .alert({
                    message:
                        "提示：请用任意的用户和密码进行登录，轩钰QQ/微信：969718197"
                })
                .then(() => {
                    // on close
                });
        },
        // 返回上一页
        handleBack() {
            this.$router.go(-1);
        },
        // 处理登录
        onLogin() {
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
                if (this.userName && this.password) {
                    this.$Cookies.set("TOKEN", this.userName,{ expires: 7 });
                    localStorage.setItem("isLogin", true);
                    this.$router.push("/");
                    this.$notify({ type: "success", message: "登录成功" });
                }
            }, 1000);
        },
        // 切换手机号登录
        onPhoneLogin() {
            this.isPhoneLogin = !this.isPhoneLogin;
        },
        //验证码倒计时
        VerifyCodeCountdown() {
            this.$toast("发送成功");
            //验证码倒计时
            let time = 60;
            let timer = setInterval(() => {
                if (time == 0) {
                    clearInterval(timer);
                    this.validateBtn = "发送验证码";
                    this.disabled = false;
                } else {
                    this.validateBtn = time + "秒后重试";
                    this.disabled = true;
                    time--;
                }
            }, 1000);
        }
    },
    computed: {
        isDisabled() {
            return !this.userName || !this.password ? true : false;
        }
    }
};
</script>

<style lang="scss">
.login {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0 10%;
    background: linear-gradient(to bottom, #f06c7a 0%, #f06c7a 100%);
    .cross-login {
        position: absolute;
        top: 30px;
        left: 30px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logo {
        display: flex;
        justify-content: center;
        margin-top: 100px;
        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
    .van-divider {
        color: #fff;
    }
    .user-form {
        padding-top: 40px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .van-field {
            border-radius: 50px;
        }
        .van-field__label {
            font-size: 12px;
            width: 70px;
        }
        .van-field__control {
            font-size: 13px;
        }
    }
    .login-btn {
        margin-top: 30px;
        .van-button__text {
            color: #fff;
            font-size: 16px;
        }
    }
    .login-tips {
        padding: 10px;
        color: #fff;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
    }
    .otherlogin {
        padding: 20px;
        display: flex;
        justify-content: space-around;
        div {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
        }
        .weibo {
            background-color: #000;
        }
        .weixin {
            background-color: #2ad19b;
        }
        .qq {
            background-color: #2baefc;
        }
    }
    .protocol {
        text-align: center;
        color: #fff;
    }
}
</style>