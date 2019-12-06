<template>
  <div class="cart">
    <!-- 顶部导航 -->
    <van-sticky>
      <van-nav-bar title="购物车" @click-left="onClickLeft">
        <template slot="left">
          <van-icon name="arrow-left" size=".48rem" color="#000" />
        </template>
        <!-- 清空全部的商品订单 -->
        <template slot="right" v-if="hisGoodsOrder && this.goodsOrderList.length">
          <van-icon class-prefix="iconfont icon-laji" @click="onClearOrder" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <!-- 无商品订单时显示提示 -->
    <div class="no-has-goods-order" v-if="!hisGoodsOrder || !this.goodsOrderList.length">
      <no-goods-order :tipsTxt="tipsTxt"></no-goods-order>
    </div>
    <!-- 有商品订单时显示 -->
    <div class="has-goods-order" v-else>
      <!-- 购物商品订单列表 -->
      <van-swipe-cell v-for="(item,index) in goodsOrderList" :key="index">
        <div slot="default" class="order-item">
          <van-row type="flex" justify="space-between">
            <!-- 商品订单复选框 -->
            <van-col span="3" class="d-flex-c">
              <van-checkbox v-model="item.isSelected" @change="selectSingle"></van-checkbox>
            </van-col>
            <!-- 订单商品图片 -->
            <van-col span="6">
              <van-image :src="item.imgUrl" fit="contain" lazy-load show-loading class="order-img" />
            </van-col>
            <!-- 订单商品详细信息 -->
            <van-col span="15" class="goods-info">
              <!-- 商品标题 -->
              <div class="goods-title">{{item.title}}</div>
              <!-- 商品tag -->
              <div class="goods-tag">
                <span>440ml;10件，套装</span>
                <van-icon name="arrow-down" />
              </div>
              <!-- 商品价格与数量 -->
              <div class="goods-price-num">
                <div class="price">￥{{item.price}}</div>
                <div class="num">
                  <van-stepper integer button-size="24px" v-model="item.num" />
                </div>
              </div>
            </van-col>
          </van-row>
        </div>
        <template slot="right">
          <van-button @click="handleCollection" square color="#f6da63" text="收藏" />
          <van-button @click="handleLookSimilar" square color="#eb8242" text="看相似" />
          <van-button @click="handleDelete(index)" square color="#da2d2d" text="删除" />
        </template>
      </van-swipe-cell>
      <!-- 提交订单 -->
      <van-submit-bar
        :loading="isLoading"
        safe-area-inset-bottom
        :price="summoney"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox v-model="allChecked" @change="handleAllChecked">全选</van-checkbox>
        <span slot="tip">
          你的收货地址不支持同城送,
          <span>修改地址</span>
        </span>
      </van-submit-bar>
    </div>
    <!-- 顶部导航 -->
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import FooterBar from "../../components/FooterBar";
import NoGoodsOrder from "./base/NoGoodsOrder";
export default {
  components: {
    FooterBar,
    NoGoodsOrder
  },
  data() {
    return {
      tipsTxt: "去登录",
      allChecked: true, //订单全选
      hisGoodsOrder: false, //是否有商品订单
      isLoading: false, //提交订单按钮提交loading状态
      goodsOrderList: [
        {
          isSelected: true,
          title: "科仕顿剃须刀4D浮动充电式胡须刀男士电动水洗刮胡刀带理发器包邮",
          imgUrl:
            "//t00img.yangkeduo.com/goods/images/2019-11-17/23af9e10ee30676329b7f9cb378a2e5b.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/312/q/70/format/webp",
          price: 19.9,
          num: 2
        },
        {
          isSelected: true,
          title: "高弹力加绒打底衫女秋冬季洋气妈妈装长袖t恤修身保暖上衣小衫",
          imgUrl:
            "//t00img.yangkeduo.com/goods/images/2019-11-03/bdbc5845840e48c831d475acfe53856a.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/312/q/70/format/webp",
          price: 29.9,
          num: 1
        },
        {
          isSelected: true,
          title: "棉拖鞋女秋冬季家居家用室内情侣可爱拖鞋女式冬天保暖毛拖鞋男士",
          imgUrl:
            "//t00img.yangkeduo.com/goods/images/2019-09-02/b2a29507-1156-4431-be2e-c9370e725c81.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/312/q/70/format/webp",
          price: 9.9,
          num: 2
        },
        {
          isSelected: true,
          title: "棉拖鞋女秋冬季家居家用室内情侣可爱拖鞋女式冬天保暖毛拖鞋男士",
          imgUrl:
            "//t00img.yangkeduo.com/goods/images/2019-09-02/b2a29507-1156-4431-be2e-c9370e725c81.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/312/q/70/format/webp",
          price: 9.9,
          num: 3
        }
      ]
    };
  },
  created() {
    const TOKEN = this.$Cookies.get("TOKEN");
    TOKEN ? (this.hisGoodsOrder = true) : (this.tipsTxt = "去登录");
  },
  methods: {
    // 提交订单跳转
    onSubmit() {
      this.isLoading = true;
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true
      });
      setTimeout(() => {
        this.isLoading = false;
        this.$router.push("/cart/submit-order");
      }, 2000);
    },
    // 路由跳转
    onClickLeft() {
      this.$router.push("/");
    },
    // 商品订单滑动收藏事件
    handleCollection() {
      this.$toast.success("收藏成功");
    },
    //删除商品订单
    handleDelete(index) {
      this.$dialog
        .confirm({
          message: "你确定要删除该商品订单吗？"
        })
        .then(() => {
          this.goodsOrderList.splice(index, 1);
        })
        .catch(() => {
          // on cancel
        });
    },
    //删除全部订单
    onClearOrder() {
      this.$dialog
        .confirm({
          message: "你确定清空商品订单吗？"
        })
        .then(() => {
          this.goodsOrderList = [];
          this.tipsTxt = "去逛逛看";
        })
        .catch(() => {
          // on cancel
        });
    },
    // 看相似
    handleLookSimilar() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true
      });
    },
    //商品订单全选
    handleAllChecked() {
      this.goodsOrderList.forEach(item => {
        item.isSelected = this.allChecked;
      });
    },
    // 商品订单单选
    selectSingle() {
      this.allChecked = this.goodsOrderList.every(item => {
        return item.isSelected;
      });
    }
  },
  computed: {
    // 计算订单总价格
    summoney() {
      return this.goodsOrderList.reduce((pre, next) => {
        return next.isSelected ? pre + next.price * next.num * 100 : pre;
      }, 0);
    }
  },
  watch: {
    goodsOrderList(newValue) {
      if (!newValue.length) {
        this.tipsTxt = "去逛逛看";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.cart {
  padding-bottom: 80px;
  .van-submit-bar__bar {
    padding-left: 10px;
  }
  .has-goods-order {
    padding: 10px;
    .swiper-right {
      display: flex;
    }
    .order-item {
      background-color: #ffffff;
      padding: 10px;
      padding-left: 0;
      margin-bottom: 10px;
      border-radius: 5px;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      .d-flex-c {
        display: flex;
        justify-content: center;
      }
      .goods-info {
        padding-left: 10px;
        .goods-title {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .goods-tag {
          height: 15px;
          border-radius: 15px;
          width: 100px;
          background-color: #dddddd;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          span {
            font-size: 8px;
          }
        }
        .goods-price-num {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          .price {
            color: #f60;
            font-size: 20px;
          }
        }
      }
    }
  }
  .van-button {
    height: inherit;
  }
}
</style>