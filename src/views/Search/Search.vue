<template>
  <div class="search">
    <!-- 顶部导航 -->
    <van-sticky>
      <van-nav-bar title="搜索" left-text="返回" left-arrow @click-left="black" />
    </van-sticky>
    <!-- 搜索 -->
    <form>
      <van-search
        v-model="keywords"
        placeholder="请输入搜索关键词"
        shape="round"
        @search="onSearch"
      />
    </form>
    <!-- 搜索历史 -->
    <div class="search-history">
      <van-cell title="搜索历史" size="large">
        <van-icon
          slot="right-icon"
          color="#ccc"
          @click="clear"
          class-prefix="icon-font-18 iconfont icon-laji"
          style="line-height: inherit;"
        />
      </van-cell>
      <!--搜索历史内容 -->
      <div class="history-content" v-if="!clearHistory">
        <div>工装裤</div>
        <div>工装裤装</div>
        <div>工装裤装装</div>
        <div>工装裤装装</div>
        <div>工装裤装装</div>
        <div>工装裤装装</div>
        <div>工装裤</div>
        <div>工装裤装</div>
        <div>工装裤装装</div>
      </div>
    </div>
    <!-- 热门搜索 -->
    <div class="hot-search">
      <van-cell title="大家正在搜" size="large">
        <van-icon
          size="20px"
          slot="right-icon"
          color="#f60"
          name="fire"
          style="line-height: inherit;"
        />
      </van-cell>
      <!-- 热门搜索内容 -->
      <div class="hot-search-content">
        <div>工装裤</div>
        <div>工装裤装</div>
        <div>工装裤装装</div>
        <div>工装裤装装</div>
        <div>工装裤装装</div>
        <div>工装裤装装</div>
        <div>工装裤</div>
        <div>工装裤装</div>
        <div>工装裤装装</div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <like-goods></like-goods>
  </div>
</template>

<script>
import LikeGoods from "../../components/LikeGoods";
export default {
  components: {
    LikeGoods
  },
  data() {
    return {
      keywords: "",
      clearHistory: false
    };
  },
  methods: {
    black() {
      this.$router.go(-1);
    },
    onSearch() {
      console.log("我已经执行了");
    },
    // 清除历史搜索
    clear() {
      this.$dialog
        .confirm({
          message: "你确定要删除该商品订单吗？"
        })
        .then(() => {
          this.clearHistory = true;
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  background-color: #fff;
  .van-search__content{
      background-color: #eeeeee;
  }
  .search-history,
  .hot-search {
    .history-content,
    .hot-search-content {
      padding: 3px 10px;
      div {
        background-color: #eeeeee;
        padding: 3px 10px;
        margin: 0 10px;
        display: inline-block;
        border-radius: 20px;
        margin-bottom: 10px;
        color: #333;
      }
    }
  }
}
</style>