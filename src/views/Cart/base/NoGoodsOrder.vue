<template>
  <div class="cart-tips">
    <div>
      <div class="tips">
        <img
          src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png"
          alt
        />
        <div class="noCart-title">去添加点东西吧</div>
      </div>
      <div class="to-login">
        <van-button @click="goLogin" round block type="danger">{{tipsTxt}}</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    tipsTxt:{
      type:String,
      default:"去登录"
    }
  },
  methods: {
    // 登录按钮，去逛逛
    goLogin() {
      if(this.tipsTxt == "去登录"){
        this.$toast.loading({
        message: "加载中...",
        forbidClick: true
      });
      setTimeout(()=>{
          this.$toast.clear()
          this.$router.push("/login");
      },1000)
      }else{
        this.$toast.loading({
          message:"正在赶集中...",
          forbidClick: true
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-tips {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  .tips {
    img {
      width: 100px;
      display: block;
      margin: auto;
    }
    .noCart-title {
      font-size: 14px;
      text-align: center;
      color: #999;
    }
  }
  .to-login {
    margin-top: 20px;
    width: 200px;
  }
}
</style>