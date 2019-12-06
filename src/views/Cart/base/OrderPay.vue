<template>
  <div class="order-pay">
    <!-- 顶部导航 -->
    <van-nav-bar title="支付订单" left-arrow @click-left="onBack" />
    <!-- 支付金额 -->
    <van-row type="flex" justify="center">
        <van-col>
          <div class="price">￥2339</div>
          <div class="title">支付金额</div>
        </van-col>
    </van-row>
    <!-- 选择支付方式 -->
    <div class="pay-way">
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="微信支付" clickable @click="radio = '1'">
            <!-- 微信支付 -->
            <div slot="icon" class="m-r-5">
              <van-icon name="wechat" size=".56rem" color="rgb(54, 203, 89)" />
            </div>
            <van-radio slot="right-icon" checked-color="rgb(250, 67, 106)" name="1" />
          </van-cell>
          <van-cell title="支付宝支付" clickable @click="radio = '2'">
            <!-- 支付宝支付 -->
            <div slot="icon" class="m-r-5">
              <van-icon name="alipay" size=".56rem" color="rgb(1, 170, 239)" />
            </div>
            <van-radio slot="right-icon" checked-color="rgb(250, 67, 106)" name="2" />
          </van-cell>
          <van-cell title="余额支付" clickable @click="radio = '3'">
            <!-- 余额支付 -->
            <div slot="icon" class="m-r-5">
              <van-icon name="gold-coin" size=".56rem" color="rgb(254, 142, 46)" />
            </div>
            <van-radio slot="right-icon" checked-color="rgb(250, 67, 106)" name="3" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
      <!-- 确认支付按钮 -->
      <div class="pay-btn">
          <van-button type="primary" color="rgb(250, 67, 106)" block @click="onPay">确认支付</van-button>
      </div>
      
    </div>
    <!-- 弹出支付输入密码框 -->
    <van-popup v-model="showPassWord" position="bottom" :style="{ height: '50%' }">
      <!-- 密码输入框 -->
      <van-password-input
        :value="value"
        info="默认支付密码:123456"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
      <!-- 数字键盘 -->
      <van-number-keyboard
        :show="showKeyboard"
        theme="custom"
        close-button-text="确定"
        transition
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = true"
        @close="onConfirm"
        safe-area-inset-bottom
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1", //默认选择的支付方式
      showPassWord: false, // 密码输入框
      value: "", //密码值
      showKeyboard: true //输入键盘
    };
  },
  methods: {
    // 路由返回
    onBack() {
      this.$router.back();
    },
    //确认支付
    onPay() {
      this.showPassWord = !this.showPassWord;
      this.value = ""; //初始化密码输入框
    },
    // 密码输入框
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    // 清除密码输错
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    //输入完成
    onConfirm() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        loadingType: "spinner"
      });
      setTimeout(() => {
        //   密码输入正确要做的事情
        if (this.value == "123456") {
          this.showPassWord = !this.showPassWord;
          this.$toast.clear();
          this.$router.push("/pay-success");
          //   this.$toast.success('支付成功');
        } else {
          //   密码输入错误要做的事情
          this.showPassWord = !this.showPassWord;
          this.$toast.clear();
          this.$toast.fail("密码输入错误");
        }
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.order-pay{
    background-color: #fff;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    .van-icon-arrow-left{
      color: #000;
    }
    .price{
      color: rgb(250, 67, 106);
      font-size: 24px;
      padding-top: 20px;
    }
    .title{
      margin-top: 5px;
      padding-left: 8px;
      text-align: center;
    }
    .pay-way{
        padding: 20px;
        .pay-btn{
            padding: 10px;
        }
    }
}
</style>