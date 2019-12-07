<template>
  <div class="spike">
    <!-- 秒杀倒计时 -->
    <van-row type="flex" justify="space-between">
      <van-col class="title">
        <van-icon class-prefix="iconfont icon-miaosha" />
        <span>限时秒杀</span>
        <van-count-down :time="time">
          <template v-slot="timeData">
            <span class="time-item">{{ timeData.hours }}</span>:
            <span class="time-item">{{ timeData.minutes }}</span>:
            <span class="time-item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </van-col>
      <van-col class="more">
        <span>查看更多</span>
        <van-icon name="arrow" />
      </van-col>
    </van-row>
    <!-- 秒杀商品 -->
    <van-row class="spike-goods" type="flex" justify="space-between">
      <van-col class="spike-goods-item" v-for="(item,index) in 10" :key="index">
        <van-image
          width="3rem"
          fit="contain"
          lazy-load
          radius="5px"
          src="//t00img.yangkeduo.com/goods/images/2019-11-26/6cc0cb7c2244771122a3c75fd212a163.jpeg"
        />
        <div class="van-multi-ellipsis--l2">【加绒加厚】假两件连帽卫衣女秋冬2019年新款韩版百搭学生上衣潮</div>
        <div class="price">
          <span>￥176</span>
          <s>￥399</s>
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  }
};
</script>
<style lang="scss" scoped>
.spike {
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-miaosha {
      font-size: 20px;
      color: #f06c7a;
      margin-right: 5px;
    }
    span {
      font-size: 16px;
      font-weight: bold;
      margin-right: 5px;
    }
    .time-item {
      display: inline-block;
      width: 20px;
      border-radius: 3px;
      margin-right: 3px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background-color: #f06c7a;
    }
  }
  .more {
    color: #bbb;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
  }
  .spike-goods {
    overflow-x: auto;
    .spike-goods-item {
      padding: 10px 0;
      margin-right: 7px;
      width: 50%;
      img {
        border-radius: 5px;
      }
      .price {
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        span {
          font-size: 14px;
          color: #f06c7a;
        }
        s {
          color: #bbb;
        }
      }
    }
  }
}
</style>