<template>
  <div class="goods-pic">
    <van-divider>宝贝详情</van-divider>
    <!-- 详细图片 -->
    <img
      v-for="(item,index) in images"
      :key="index"
      class="w100"
      v-lazy="item"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "//t00img.yangkeduo.com/goods/images/2019-10-25/bd6da6c3-169f-41a0-8de2-4d5f17b748b7.jpg?imageMogr2/quality/70",
        "//t00img.yangkeduo.com/goods/images/2019-10-25/bd6da6c3-169f-41a0-8de2-4d5f17b748b7.jpg?imageMogr2/quality/70",
        "//t00img.yangkeduo.com/goods/images/2019-10-25/bd6da6c3-169f-41a0-8de2-4d5f17b748b7.jpg?imageMogr2/quality/70",
        "//t00img.yangkeduo.com/goods/images/2019-10-25/bd6da6c3-169f-41a0-8de2-4d5f17b748b7.jpg?imageMogr2/quality/70",
        "//t00img.yangkeduo.com/goods/images/2019-10-25/bd6da6c3-169f-41a0-8de2-4d5f17b748b7.jpg?imageMogr2/quality/70"
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
.goods-pic {
  .w100 {
    width: 100%;
  }
}
</style>