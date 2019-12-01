<template>
  <div class="goods-pic">
    <van-divider>宝贝详情</van-divider>
    <!-- 详细图片 -->
    <img
      v-for="(item,index) in detailImg"
      :key="index"
      class="w100"
      v-lazy="item.url"
    />
  </div>
</template>

<script>
export default {
  props:{
    detailImg:Array
  }
};
</script>

<style lang="scss" scoped>
.goods-pic {
  .w100 {
    width: 100%;
  }
}
</style>