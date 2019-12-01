<template>
  <!-- 商品规格 -->
  <div class="goods-sku">
    <van-sku
      v-model="showSku"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      safe-area-inset-bottom
      show-add-cart-btn
      reset-stepper-on-hide
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    ></van-sku>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSku: false, //下单sku的弹出
      goodsId: 23444, //商品id
      quota: 0, //限购数，0表示不限购
      quotaUsed: 345, //已经购买过的数量
      sku: {
        //规格数据
        hide_stock: false, //是否显示商品库存
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            k_id: 1,
            v: [
              {
                id: "1214", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl:
                  "http://t00img.yangkeduo.com/goods/images/images/2019-10-05/a886e0b1-f10d-46bd-bc5c-9ca19f9cbc09.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl:
                  "http://t00img.yangkeduo.com/goods/images/images/2019-10-05/a886e0b1-f10d-46bd-bc5c-9ca19f9cbc09.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl:
                  "http://t00img.yangkeduo.com/goods/images/images/2019-10-05/a886e0b1-f10d-46bd-bc5c-9ca19f9cbc09.jpg",
                previewImgUrl:
                  "http://t00img.yangkeduo.com/goods/images/images/2019-10-05/a886e0b1-f10d-46bd-bc5c-9ca19f9cbc09.jpg"
              }
            ],
            // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            k_s: "s1"
          },
          {
            k: "尺码",
            k_id: 2,
            v: [
              {
                id: "1194",
                name: "S码"
              },
              {
                id: "1195",
                name: "M码"
              },
              {
                id: "1196",
                name: "L码"
              }
            ],
            k_s: "s2"
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          //  红色规格
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1214", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1194", // 规格类目 k_s 为 s2 的对应规格值 id
            // s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2259,
            price: 129,
            s1: "1214",
            s2: "1195",
            stock_num: 130
          },
          {
            id: 2259,
            price: 129,
            s1: "1214",
            s2: "1196",
            stock_num: 130
          },

          // 蓝色规格
          {
            id: 2259,
            price: 129,
            s1: "1215",
            s2: "1194",
            stock_num: 130
          },
          {
            id: 2259,
            price: 129,
            s1: "1215",
            s2: "1195",
            stock_num: 130
          },
          {
            id: 2259,
            price: 129,
            s1: "1215",
            s2: "1196",
            stock_num: 130
          }
        ],
        price: "9.68-15.96", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false // 是否无规格商品
      },
      goods: {
        //商品信息
        title: "无线蓝牙耳机双耳单耳塞迷你入耳式运动vivo苹果oppo安卓手机通用",
        picture:
          "http://t00img.yangkeduo.com/goods/images/2019-10-26/757305fa0ef438882a0d3db39cebcda3.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/300/q/70/format/webp"
      }
    };
  },
  methods: {
    // 立即购买
    onBuyClicked() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true
      });
      setTimeout(() => {
        this.$toast.clear()
        this.$router.push("/cart/submit-order");
      }, 1000);
    },
    // 添加购物车
    onAddCartClicked() {
     this.$toast.loading({
        message: "加载中...",
        forbidClick: true
      });
      setTimeout(() => {
        this.$toast.clear()
        this.$toast.success('添加成功');
        this.showSku = false;
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>