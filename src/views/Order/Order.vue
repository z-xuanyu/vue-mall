<template>
  <div class="my-order">
    <!-- 顶部导航 -->
    <van-sticky>
       <van-nav-bar title="我的订单" left-arrow @click-left="back" />
    </van-sticky>
    <!-- 订单tabs选项卡 -->
    <van-tabs v-model="active" animated :sticky="true" offset-top="46px" ellipsis swipeable lazy-render :swipe-threshold="5">
      <!-- 全部订单 -->
      <van-tab title="全部">
        <van-panel title="订单号：T20191203" status="已完成" class="m-b-5" v-for="(item,index) in 2" :key="index">
          <div class="content">
            <van-card
              class="bg-white"
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
              v-for="(item,index) in 2"
              :key="index"
            />
          </div>
          <div slot="footer" class="footer">
            <div class="info">
              <div class="total">共4件商品合计：￥123.1.00</div>
              <div class="btn">
                <van-button plain size="mini" round>查看发票</van-button>
                <van-button plain size="mini" round type="danger">评价晒单</van-button>
                <van-button plain size="mini" round type="danger">再次购买</van-button>
              </div>
            </div>
          </div>
        </van-panel>
      </van-tab>
      <!-- 待付款订单 -->
      <van-tab title="待付款">待付款订单</van-tab>
      <van-tab title="待发货">待发货订单</van-tab>
      <van-tab title="待收货">待收货订单</van-tab>
      <van-tab title="待评价">待评价订单</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    // 路由返回
    back() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.my-order {
  .content {
    background-color: #ffffff;
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .info{
      .total{
        margin-bottom: 10px;
        text-align: right;
      }
    }
  }
}
</style>