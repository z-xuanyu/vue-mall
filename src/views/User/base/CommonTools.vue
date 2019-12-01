<template>
  <!-- 常用工具 -->
  <div class="common-tools">
    <div class="tools-wrapper">
      <!-- title -->
      <van-cell value="查看更多" is-link>
        <template slot="title">
          <span class="custom-title">常用工具</span>
        </template>
      </van-cell>
      <van-row type="flex" justify="space-between" align="center" class="tools-list">
        <van-col span="6" v-for="(item,index) in toolsData" :key="index" class="item">
          <van-icon size="0.64rem" :class="item.icon" />
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
      toolsData: [
        {name:"免费领好礼",icon:"iconfont icon-libao"},
        {name:"钱包",icon:"iconfont icon-qianbao"},
        {name:"领卷中心",icon:"iconfont icon-wodeyouhuijuan"},
        {name:"客服服务",icon:"iconfont icon-kefu"},
        {name:"每日返现",icon:"iconfont icon-50"},
        {name:"超值拼团",icon:"iconfont icon-pintuangou"},
        {name:"闲置换钱",icon:"iconfont icon-qian"},
        {name:"开发票",icon:"iconfont icon-fapiao"}
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
.common-tools {
    padding: 10px;
  .tools-wrapper {
      border-radius: 5px;
      overflow: hidden;
    .tools-list {
      background-color: #fff;
      border-top: 1px solid #eee;
      padding: 10px 0;
      flex-wrap: wrap;
    }
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 0; 
      span{
        margin-top: 5px;
      }
    }
  }
}
</style>