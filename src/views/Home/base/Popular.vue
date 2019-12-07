<template>
  <div class="popular">
    <!-- 标题 -->
    <van-row type="flex" justify="space-between">
      <van-col class="title">
        <van-icon name="fire" color="#f06c7a" />
        <span>热门限购</span>
      </van-col>
      <van-col class="tips">
        <span>极品生活</span>
        <span>日用之美好</span>
      </van-col>
    </van-row>
    <!-- 热门商品 -->
    <div class="hot-goods">
      <van-row v-for="(item,index) in 3" :key="index" class="hot-goods-item m-b-10 bg-white">
        <van-col :span="8">
          <van-image
            lazy-load
            radius="3px"
            src="http://t00img.yangkeduo.com/goods/images/2018-09-09/cf5d55c606d95f18ecc0b3e73c0a9498.jpeg"
          />
        </van-col>
        <!-- 抢购商品信息 -->
        <van-col :span="16" class="goods-info">
          <div class="van-ellipsis goods-title">2019新款秋冬季连帽卫衣女韩版潮宽松女学生ins羊羔毛绒加绒加厚</div>
          <!-- 标题下面内容部分 -->
          <van-row type="flex" justify="space-between" align="center">
            <van-col :span="14">
              <div class="price">
                <span>￥58</span>
                <s>￥198</s>
              </div>
              <van-progress color="#f2826a" stroke-width="7" pivot-text :percentage="78" />
              <div class="purchased">已抢购477件</div>
            </van-col>
            <van-col :span="10" class="buy-btn">
              <van-button round size="mini" color="#f06c7a">立即抢购</van-button>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.popular {
  padding: 0 10px;
  .title {
    display: flex;
    align-items: center;
    span {
      font-size: 16px;
      font-weight: bold;
    }
    .van-icon {
      font-size: 18px;
      margin-right: 5px;
    }
  }
  .tips {
    color: #bbb;
    span {
      padding: 0 3px;
    }
  }
  .hot-goods {
    margin-top: 10px;
    .hot-goods-item {
        border-radius: 10px;
      .goods-info {
        padding: 8px;
        .goods-title {
          font-size: 14px;
          margin-bottom: 10px;
          color: #000;
        }
        .price {
          display: flex;
          align-items: center;

          span {
            font-size: 20px;
            color: #f06c7a;
            margin-bottom: 5px;
            margin-right: 10px;
          }
          s {
            color: #bbb;
          }
        }
        .purchased {
          color: #bbb;
          margin-top: 5px;
        }
        .buy-btn {
          text-align: center;
          .van-button--mini {
            padding: 0 5px;
          }
        }
      }
    }
  }
}
</style>