<template>
  <div class="category">
    <!-- 搜索框 -->
    <van-sticky>
      <van-search
        @focus="goSearch"
        input-align="center"
        shape="round"
        placeholder="请输入搜索关键词"
        v-model="Searchvalue"
      />
    </van-sticky>
    <!-- 分类 -->
    <van-row type="flex">
      <!-- 分类导航 -->
      <van-col span="6">
        <div ref="menu" class="menu-wrapper">
          <van-sidebar v-model="activeKey" @change="change">
            <van-sidebar-item :title="item.name" v-for="(item,index) in menu" :key="index" />
          </van-sidebar>
        </div>
      </van-col>
      <!-- 分类内容 -->
      <van-col span="18">
        <div ref="content" class="content-wrapper">
          <!-- 分类内容部分 -->
          <category-content></category-content>
        </div>
      </van-col>
    </van-row>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import BScroll from "better-scroll"
import FooterBar from "../../components/FooterBar";
import CategoryContent from "./base/CategoryContent"

export default {
  components: {
    FooterBar,
    CategoryContent
  },
  data() {
    return {
      Searchvalue: "",
      activeKey: 0,
      menu: [
        { name: "推荐分类", id: "1" },
        { name: "进口超市", id: "2" },
        { name: "国际品牌", id: "3" },
        { name: "奢侈品", id: "4" },
        { name: "海囤全球", id: "6" },
        { name: "男装", id: "7" },
        { name: "女装", id: "8" },
        { name: "男鞋", id: "9" },
        { name: "女鞋", id: "10" },
        { name: "钟表珠宝", id: "11" }
      ]
    };
  },
  created() {
    this.$nextTick(()=>{
      this.initScroll()
    })
  },
  methods: {
    // 初始化better-scroll
    initScroll(){
      this.menuScroll = new BScroll(this.$refs.menu,{
        scrollY:true,
        click:true,
        probeType:3
      });
      this.contentScroll = new BScroll(this.$refs.content,{
        scrollY:true,
        click:true,
        probeType:3
      })
    },
    goSearch() {
      this.$router.push("/search");
    },
    change(index) {
      this.contentActive = index;
    }
  },
  beforeDestroy(){
    this.menuScroll.destroy();
    this.contentScroll.destroy();
  }
};
</script>
<style lang="scss" scoped>
.category {
  .van-search {
    border-bottom: 1px solid #dddddd;
    .van-search__content {
      background-color: #eeeeee;
    }
  }
  .menu-wrapper{
   position: absolute;
   top: 55px;
   bottom: 50px;
   left: 0;
   overflow: hidden;
  }
  .content-wrapper{
    position: fixed;
    top: 55px;
    bottom: 50px;
    overflow: hidden;
    left: 85px;
    right: 0;
  }
}
</style>