<template>
  <div class="my-order">
    <!-- 顶部导航 -->
    <van-sticky>
      <van-nav-bar title="我的订单" left-arrow @click-left="back" />
    </van-sticky>
    <!-- 订单tabs选项卡 -->
    <van-tabs
      v-model="active"
      animated
      :sticky="true"
      :offset-top="46"
      ellipsis
      swipeable
      lazy-render
      :swipe-threshold="6"
    >
      <!-- 全部订单 -->
      <van-tab title="全部">
         <order-card></order-card>
      </van-tab>
      <!-- 待付款订单 -->
      <van-tab title="待付款">
        <order-card></order-card>
      </van-tab>
      <van-tab title="待发货">
         <order-card></order-card>
      </van-tab>
      <van-tab title="待收货">
         <order-card></order-card>
      </van-tab>
      <van-tab title="待评价">
         <order-card></order-card>
      </van-tab>
      <van-tab title="售后">
         暂无售后订单
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import OrderCard from "./base/OrderCard"
export default {
  components: {
    OrderCard,
  },
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
.my-order{
  // 顶部导航左图标颜色
  .van-icon-arrow-left {
    color: #000;
  }
}
</style>