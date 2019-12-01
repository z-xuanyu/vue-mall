<template>
  <div class="navbar">
    <van-row type="flex" justify="space-between" align="center">
      <van-col span="2" class="text-right">
        <van-icon  color="#fff" class-prefix="icon-font-20 iconfont icon-leimupinleifenleileibie2"></van-icon>
      </van-col>
        <!-- 搜索框 -->
      <van-col span="20">
          <van-search @focus="goSearch" shape="round" background="#f06c7a" placeholder="请输入搜索关键词" v-model="searchValue" />
      </van-col>
      <!-- 信息 -->
      <van-col span="2">
          <van-icon @click="goNews" name="bell" class-prefix="icon-font-20 iconfont icon-bell " color="#fff"></van-icon>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { Icon, Search, Row, Col } from "vant";
export default {
  components: {
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    goSearch() {
      this.$router.push("/search")
    },
    goNews(){
      this.$router.push("/news")
    }
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  .van-row{
      width: 100%;
      background: linear-gradient(to bottom, #f06c7a 0%, #f06c7a 100%);
      .van-cell{
        line-height: 19px;
      }
  }
  .text-right{
    text-align: right;
  }
}
</style>
