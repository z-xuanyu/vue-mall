<template>
  <div class="icons-nav">
    <van-swipe :loop="false" @change=change>
      <van-swipe-item v-for="(icons,index) in iconData" :key="index">
        <van-grid :border="false" :column-num="5">
          <van-grid-item v-for="(item,index) in icons" :key="index">
            <van-image class="iconimg" :src="item.iconUrl" />
            <span class="name">{{item.name}}</span>
          </van-grid-item>
        </van-grid>
      </van-swipe-item>
      <!-- 自定义提示器 -->
      <div slot="indicator" class="indicator">
          <div :class="{'active':indicatorActive == 0}"></div>
          <div :class="{'active':indicatorActive == 1}"></div>
      </div>
    </van-swipe>
  </div>
</template>
<script>
import { Grid, GridItem, Image, Swipe, SwipeItem } from "vant";
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      icons: [],
      indicatorActive:0,
    };
  },
  created() {
    //请求Icons nav 数据
    this.getIconsData();
  },
  methods: {
    getIconsData() {
      this.$api.homeData.iconsNav().then(({ data: { iconnav } }) => {
        this.icons = iconnav;
      });
    },
    change(index){
        this.indicatorActive = index
    }
  },
  computed: {
    // 二维数组计算
    iconData() {
      let iconData = [];
      this.icons.forEach((item, index) => {
        const iconItem = Math.floor(index / 10);
        if (!iconData[iconItem]) {
          iconData[iconItem] = [];
        }
        iconData[iconItem].push(item);
      });
      return iconData;
    }
  }
};
</script>
<style lang="scss">
.icons-nav {
    position: relative;
  .indicator{
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      border-radius: 2px;
      overflow: hidden;
      div{
          height: 5px;
          width: 30px;
          background-color: #ccc;
      }
      .active{
          background-color: #f60;
      }
  }
  .van-swipe {
    padding-bottom: 10px;
    background-color: #fff;
  }
  .van-grid-item__content {
    padding: 5px;
    .iconimg {
      width: 36px;
      height: 36px;
      margin-bottom: 5px;
    }
    span.name {
      font-size: 11px;
    }
  }
}
</style>