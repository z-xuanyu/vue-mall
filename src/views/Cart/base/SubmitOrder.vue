<template>
  <div class="submit-order">
    <!-- 顶部导航 -->
    <van-sticky>
      <van-nav-bar title="提交订单" left-arrow @click-left="onClickLeft" />
    </van-sticky>
    <!-- 收货地址 -->
    <van-contact-card @click="onContactCard" :type="type" :name="editAddressInfo.name" :tel="editAddressInfo.tel" :add-text="editAddressInfo.address" />
    <!-- 商品信息 -->
    <van-panel title="商品信息">
      <div>
        <van-card
          num="1"
          price="19.90"
          desc="440ml;10件，套装"
          title="高弹力加绒打底衫女秋冬季洋气妈妈装长袖t恤修身保暖上衣小衫"
          thumb="//t00img.yangkeduo.com/goods/images/2019-11-03/bdbc5845840e48c831d475acfe53856a.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/312/q/70/format/webp"
        />
        <van-card
          num="2"
          price="29.90"
          desc="440ml;10件，套装"
          title="科仕顿剃须刀4D浮动充电式胡须刀男士电动水洗刮胡刀带理发器包邮"
          thumb="//t00img.yangkeduo.com/goods/images/2019-11-17/23af9e10ee30676329b7f9cb378a2e5b.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/312/q/70/format/webp"
        />
      </div>
    </van-panel>
    <!-- 商品cell -->
    <van-cell title="商品总价" value-class="text-color" value="￥1192.00" size="large" />
    <!-- 优惠卷 -->
    <goods-coupon></goods-coupon>
    <!-- 发票 -->
    <van-cell title="发票" is-link value-class="text-color-red" value="不开发票" size="large" />
    <!-- 运费 -->
    <van-cell title="运送配" value-class="text-color" value="￥0.00" size="large" />
    <!-- 订单备注留言 -->
    <van-cell-group>
      <van-field
        v-model="message"
        rows="1"
        autosize
        label="订单备注"
        type="textarea"
        placeholder="请输入留言"
      />
    </van-cell-group>
    <!-- 确认支付 -->
    <van-submit-bar safe-area-inset-bottom :price="3050" button-text="提交订单" @submit="onSubmitPay" />
  </div>
</template>

<script>
import GoodsCoupon from "./GoodsCoupon";
import {mapState} from "vuex"
export default {
  components: {
    GoodsCoupon
  },
  data() {
    return {
      type:"edit",
      message: "", //下单留言信息
    };
  },
  mounted(){
    // 判断是否有地址
    Object.keys(this.editAddressInfo).length?this.type = "edit":this.type = "add"
  },
  methods: {
    // 返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    // 提交支付订单
    onSubmitPay(){
      this.$router.push("/order-pay")
    },
    // 点击联系人卡片
    onContactCard(){
      this.$router.push("/address")
    }
  },
  computed: {
    ...mapState(["editAddressInfo"])
  },
};
</script>

<style lang="scss" scoped>
.submit-order {
  padding-bottom: 50px;
  .text-color {
    color: #000;
  }
  .text-color-red {
    color: red;
  }
}
</style>