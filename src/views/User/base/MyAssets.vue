<template>
  <!-- 我的资产 -->
  <div class="my-assets">
    <div class="assets-wrapper">
      <van-cell value="我的资产" />
      <van-row type="flex" justify="space-between" align="center" class="assets-list">
        <van-col class="item" v-for="(item,index) in Data" :key="index">
          <span>{{item.num}}</span>
          <span class="m-t-5">{{item.name}}</span>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Data: [
        {name:"优惠卷",num:"3"},
        {name:"积分",num:"7"},
        {name:"红包",num:"0"},
        {name:"礼品卡",num:"1"},
        {name:"津贴",num:"20"}
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
.my-assets {
  padding: 0 10px;
  .assets-wrapper {
      border-radius: 5px;
      overflow: hidden;
    .assets-list {
      background-color: #fff;
      padding: 10px 20px;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
}
</style>