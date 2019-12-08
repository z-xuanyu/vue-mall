<template>
  <div class="footer-navbar">
    <van-tabbar v-model="active" safe-area-inset-bottom route active-color="#fa4930">
      <van-tabbar-item replace to="/" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="bars">分类</van-tabbar-item>
      <van-tabbar-item replace to="/find" icon="bars">发现</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    components:{
        [Tabbar.name]:Tabbar,
        [TabbarItem.name]:TabbarItem
    },
  data() {
    return {
        active:0
    };
  }
};
</script>
<style lang="sass" scoped></style>
