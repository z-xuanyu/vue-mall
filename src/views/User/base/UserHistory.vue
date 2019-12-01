<template>
  <!-- 用户浏览记录 -->
  <div class="user-history">
    <van-row type="flex" justify="space-between" align="center" class="history-list">
      <van-col span="6" class="item" v-for="(item,index) in Data" :key="index">
        <span>{{item.num}}</span>
        <span class="m-t-5">{{item.name}}</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Data: [
        {name:"收藏夹",num:"25"},
        {name:"店铺关注",num:"22"},
        {name:"喜欢的内容",num:"3"},
        {name:"足迹",num:"44"},
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
.user-history {
  margin-top: 40px;
  padding: 0 10px;
  .history-list {
      padding: 10px 0;
    background-color: #fff;
    border-radius: 5px;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>