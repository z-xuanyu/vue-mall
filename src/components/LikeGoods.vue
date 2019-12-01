<template>
  <div class="like-goods">
    <!-- 猜你喜欢 -->
    <van-divider v-if="isTitle" :style="{ color: '#333', borderColor: '#ccc', padding: '0 16px' }">
      <van-icon name="like" class-prefix="icon-font-20 iconfont icon-hot" color="red" />猜你喜欢
    </van-divider>
    <!-- 商品列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-row class="goods-list">
        <van-col
          span="12"
          v-for="(item,index) in goodsData"
          :key="index"
          @click="goDetail(index)"
          class="goods-wrapper"
        >
          <div class="goods-item">
            <div class="goods-pic">
              <img :src="item.hd_thumb_url" />
            </div>
            <div class="goods-info">
              <div class="goods-title">{{item.goods_name}}</div>
              <div class="goods-price">
                <span>￥{{item.price/100}}</span>
                <s>￥{{item.quantity/100}}</s>
              </div>
              <div class="goods-num">{{item.sales_tip}}</div>
              <!-- 下单图标 -->
              <div class="buy-icon">
                <van-icon name="cart-o" color="#fff" size=".5rem" />
              </div>
            </div>
          </div>
        </van-col>
      </van-row>
    </van-list>
  </div>
</template>

<script>
export default {
  props: {
    isTitle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      loading: false,
      finished: false,
      goodsData: []
    };
  },
  created() {
    this.getLikeGoodsData();
  },
  methods: {
    // 商品上拉刷新
    onLoad() {
      setTimeout(() => {
        this.goodsData.push(
          {
            hd_thumb_url:
              "//t00img.yangkeduo.com/goods/images/2019-11-13/b1866ac62daa9ecec6be25cef8252f2b.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/312/q/70/format/webp",
            goods_name:
              "指纹感应多样电子防风个性充电式diy打火机充电创意 点烟器多功能",
            price: 560,
            quantity: 2900,
            sales_tip: "已拼10万+件"
          },
          {
            hd_thumb_url:
              "//t00img.yangkeduo.com/goods/images/2019-11-13/b1866ac62daa9ecec6be25cef8252f2b.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/312/q/70/format/webp",
            goods_name:
              "指纹感应多样电子防风个性充电式diy打火机充电创意 点烟器多功能",
            price: 560,
            quantity: 2900,
            sales_tip: "已拼10万+件"
          }
        );
        this.loading = false;
        if (this.goodsData.length > 30) {
          this.finished = true;
        }
      }, 2000);
    },
    // 请求获取商品数据
    getLikeGoodsData() {
      this.$api.homeData.likeGoods().then(({ data }) => {
        this.goodsData = data;
      });
    },
    // 跳转到商品详细页
    goDetail(index) {
      const goods_id = this.goodsData[index].goods_id;
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        loadingType: "spinner"
      });
      setTimeout(()=>{
        this.$toast.clear()
        this.$router.push({
        name: "detail",
        query: {
          goods_id: goods_id
        }
      });
      },500)
    }
  }
};
</script>

<style lang="scss" scoped>
.like-goods {
  .goods-list {
    background-color: #f4f4f4;
    padding: 5px;
    .goods-wrapper {
      padding: 5px;
      overflow: hidden;
      .goods-item {
        background-color: #fff;
        box-shadow: 3px 3px 3px rgba($color: #000000, $alpha: 0.1);
        border-radius: 3px;
        .goods-pic {
          img {
            width: 100%;
            border-radius: 3px 3px 0 0;
          }
        }
        .goods-info {
          position: relative;
          padding: 5px;
          // 购买图标
          .buy-icon{
            position: absolute;
            right: 5px;
            bottom: 5px;
            width: 26px;
            height: 26px;
            background: linear-gradient(to bottom, #f06c7a 0%, #f06c7a 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
          }
          .goods-title {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .goods-price {
            padding: 5px 0;
            span {
              color: red;
              font-size: 18px;
              font-weight: bold;
              margin-right: 5px;
            }
            s {
              color: #bbb;
            }
          }
          .goods-num {
            color: #bbb;
          }
        }
      }
    }
  }
}
</style>