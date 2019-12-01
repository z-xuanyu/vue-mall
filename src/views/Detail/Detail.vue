<template>
  <div class="detail">
    <!-- 顶部导航 -->
    <van-nav-bar
      class="bgcolor"
      title="商品详细"
      fixed
      :style="{opacity:scrollTop}"
      left-arrow
      @click-left="back"
    />
    <!-- 导航返回图片 -->
    <div class="left-icon" @click="back">
      <van-icon name="arrow-left" size=".48rem" color="#fff" />
    </div>
    <!-- 详细页面轮播 -->
    <van-swipe :autoplay="3000" indicator-color="white" @change="onChange">
      <van-swipe-item v-for="(item,index) in banner" :key="index" @click="onPrivew">
        <img
          class="swiper-pic"
          :src="item"
        />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{banner.length}}</div>
    </van-swipe>
    <!-- 轮播图预览图 -->
    <van-image-preview v-model="previewShow" :images="banner" @change="onChangePreview">
      <template v-slot:index>{{ current + 1 }}/{{banner.length}}</template>
    </van-image-preview>
    <!-- 商品标题，价格，收藏，分享 -->
    <goods-info :goodsDesc="goodsDesc" :marketPrice="marketPrice" :maxGroupPrice="maxGroupPrice" ></goods-info>
    <!-- 商品优惠卷，促销 -->
    <goods-coupon></goods-coupon>
    <!-- 商品选购 -->
    <goods-select></goods-select>
    <!-- 商品评价 -->
    <goods-comment></goods-comment>
    <!-- 商品详情 -->
    <goods-pic :detailImg="detailImg"></goods-pic>
    <!-- 购买底部导航 -->
    <van-goods-action safe-area-inset-bottom>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
      <van-goods-action-button @click="onBuyClicked" type="warning" text="加入购物车" />
      <van-goods-action-button @click="onBuyClicked" type="danger" text="立即购买" />
    </van-goods-action>
    <!-- 商品sku -->
    <goods-sku ref="sku"></goods-sku>
  </div>
</template>

<script>
import GoodsInfo from "./base/GoodsInfo";
import GoodsCoupon from "./base/GoodsCoupon";
import GoodsSelect from "./base/GoodsSelect";
import GoodsComment from "./base/GoodsComment";
import GoodsPic from "./base/GoodsPic";
import GoodsSku from "./base/GoodsSku";
export default {
  components: {
    GoodsInfo,
    GoodsCoupon,
    GoodsSelect,
    GoodsComment,
    GoodsPic,
    GoodsSku
  },
  data() {
    return {
      current: 0,
      scrollTop: 0,
      previewShow: false,
      isShouSku: true, //商品的sku显隐
      banner: [], //轮播图
      detailImg: [], //详情内容图片
      goodsDesc: "", //商品的信息
      marketPrice: "", //商品原价
      maxGroupPrice: "", //商品现价
    };
  },
  created() {
    // 请求获取数据 
    this.getDetailData();
    console.log(this.goodsDese)
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.scroll);
  },
  methods: {
    // 顶部导航显隐
    scroll() {
      const top = document.documentElement.scrollTop || document.body.scrollTop;
      if (top > 60) {
        let opacity = top / 200;
        opacity = opacity > 1 ? 1 : opacity;
        this.scrollTop = opacity;
      } else {
        this.scrollTop = 0;
      }
    },
    // 返回上一页
    back() {
      this.$router.go(-1);
    },
    // 轮播指示器
    onChange(index) {
      this.current = index;
    },
    // 轮播图预览
    onPrivew() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        loadingType: "spinner"
      });
      setTimeout(() => {
        this.$toast.clear();
        this.previewShow = true;
      }, 1000);
    },
    // 预览图片滑动时改变current
    onChangePreview(index) {
      this.current = index;
    },
    // 点击立即购买和加入购物车
    onBuyClicked() {
      this.$refs.sku._data.showSku = true;
    },
    // 请求获取数据
    getDetailData() {
      const goodsId = this.$route.query.goods_id;
      this.$api.detailData.data(goodsId).then(({ data }) => {
        this.banner = data.item.banner; //banner 轮播图
        this.detailImg = data.item.detail; //详情内容图片
        this.goodsDesc = data.item.goodsDesc; // 商品的标题
        this.marketPrice = data.item.marketPrice  //商品原价
        this.maxGroupPrice = data.item.maxGroupPrice  //商品现价
        console.log(data)
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.detail {
  padding-bottom: 50px;
  .van-nav-bar__title,
  .van-icon {
    color: #fff;
  }
  .left-icon {
    background-color: rgba($color: #000000, $alpha: 0.6);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 7777;
  }
  .swiper-pic {
    width: 100%;
  }
  .custom-indicator {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    color: #fff;
    padding: 2px 5px;
  }
}
</style>