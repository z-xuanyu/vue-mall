<template>
  <div class="swiper-wrapper">
    <van-swipe :autoplay="3000" indicator-color="#f60">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.ImgUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [], //banner 轮播图
    };
  },
  created() {
    this.$api.homeData.banner().then(({ data: { banner } }) => {
      this.images = banner;
    });
  }
};
</script>
<style lang="scss" scoped>
.swiper-wrapper {
  img {
    width: 100%;
  }
}
</style>
