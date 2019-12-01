<template>
  <!-- 我的订单 -->
  <div class="my-order">
    <div class="order-wrapper">
      <van-cell value="查看更多" is-link @click="onMore">
        <template slot="title">
          <span class="custom-title">我的订单</span>
        </template>
      </van-cell>
      <van-row type="flex" justify="space-between" align="center" class="order-list">
        <van-col v-for="(item,index) in orderData" :key="index" class="item">
          <van-icon size="0.56rem" :class="item.icon" :info="item.info" />
          <span>{{item.name}}</span>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     orderData: [
       {name:"待付款",icon:"iconfont icon-fukuan",info:"1"},
       {name:"待发货",icon:"iconfont icon-daifahuo1",info:"3"},
       {name:"待收货",icon:"iconfont icon-daishouhuo",info:"2"},
       {name:"评价",icon:"iconfont icon-pingjia",info:"1"},
       {name:"退款/售后",icon:"iconfont icon-icon1",info:""}
     ]
    }
  },
  methods: {
    // 路由跳转
    onMore() {
      this.$router.push("/order")
    }
  },
};
</script>

<style lang="scss" scoped>
.my-order {
  padding: 10px;
  .order-wrapper {
    border-radius: 5px;
    overflow: hidden;
    .order-list {
      background-color: #fff;
      border-top: 1px solid #eee;
      padding: 15px;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
          margin-top: 5px;
        }
      }
    }
  }
}
</style>