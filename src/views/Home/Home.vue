<template>
  <div class="home">
    <!-- 顶部导航 -->
    <van-sticky>
      <nav-bar></nav-bar>
    </van-sticky>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 轮播图 -->
      <div class="swiper-wrapper-w">
        <v-swiper></v-swiper>
      </div>
      <!-- icon - nav -->
      <icon-nav></icon-nav>
      <!-- 广告栏 -->
      <ad></ad>
      <!-- 秒杀 -->
      <v-spike></v-spike>
      <!-- 热门限购 -->
      <popular></popular>
      <!-- 商品列表 -->
      <like-goods :isTitle="false"></like-goods>
    </van-pull-refresh>
    <!-- 底部TabBar -->
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from "../../components/FooterBar";
import LikeGoods from "../../components/LikeGoods";
import NavBar from "./base/Navbar";
import vSwiper from "./base/Swiper";
import IconNav from "./base/IconNav";
import vSpike from "./base/Spike";
import Ad from "./base/Ad";
import Popular from "./base/Popular"
export default {
  name: "home",
  components: {
    FooterBar,
    NavBar,
    vSwiper,
    IconNav,
    vSpike,
    Ad,
    LikeGoods,
    Popular
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.$toast.success("刷新成功");
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
  .swiper-wrapper-w{
    width: 95%;
    margin: auto;
    height: 140px;
    margin-bottom: 5px;
    margin-top: 10px;
    border-radius: 5px;
    overflow: hidden;
  }
}
</style>