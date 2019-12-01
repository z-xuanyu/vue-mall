<template>
  <!-- 商品优惠卷，促销 -->
  <div class="wrapper">
    <!-- 优惠卷 -->
    <div class="coupon">
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="4" class="text-bold text-center">优惠卷</van-col>
        <van-col span="16">
          <van-tag round type="danger" class="m-r-5">满99减8</van-tag>
          <van-tag round type="danger">满59减5</van-tag>
        </van-col>
        <van-col span="4" class="text-right">
          <van-icon name="weapp-nav" size=".56rem" />
        </van-col>
      </van-row>
    </div>
    <!-- 促销 -->
    <div class="promotion">
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="4" class="text-bold text-center">促销</van-col>
        <van-col span="18">
          <van-row class="p-t-b-5" v-for="(index) in 3" :key="index">
            <van-col span="6">
                <van-tag plain round type="danger">多买优惠</van-tag>
            </van-col>
            <van-col span="18">
                满1件，立减最低1件商品价格，...
            </van-col>
          </van-row>
        </van-col>
        <van-col span="2" class="text-right">
            <van-icon name="weapp-nav" size=".56rem" />
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  background-color: #fff;
  padding: 10px;
  .promotion{
      padding: 5px 0;
  }
}

</style>