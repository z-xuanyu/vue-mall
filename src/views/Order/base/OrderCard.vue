<template>
  <div class="order-card">
    <van-panel
      title="订单号：T20191203"
      status="已完成"
      class="m-b-10 b-r-10"
      v-for="(item,index) in 2"
      :key="index"
    >
      <div class="content">
        <van-card
          class="bg-white"
          num="2"
          price="35.9"
          desc="黑色/38码"
          title="【真兔毛】加绒厚底内增高短筒雪地靴毛毛短靴女冬季新款棉鞋2019"
          thumb="http://t00img.yangkeduo.com/goods/images/2018-10-16/26c747c3d63bb5e2a545e821856d2cd4.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/300/q/70/format/webp"
          v-for="(item,index) in 2"
          :key="index"
        />
      </div>
      <div slot="footer" class="footer">
        <div class="info">
          <div class="total">共4件商品合计：￥123.1.00</div>
          <div class="btn">
            <van-button plain size="mini" round>查看发票</van-button>
            <van-button plain size="mini" round type="danger">评价晒单</van-button>
            <van-button plain size="mini" round type="danger">再次购买</van-button>
          </div>
        </div>
      </div>
    </van-panel>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.order-card{
    padding: 10px;
    .content {
      background-color: #ffffff;
    }
    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .info {
        .total {
          margin-bottom: 10px;
          text-align: right;
        }
      }
    }
}
</style>