<template>
  <div class="news">
    <!-- navbar -->
    <van-sticky>
      <van-nav-bar title="通知" left-arrow @click-left="onClickLeft" />
    </van-sticky>
    <!--list -item  -->
    <div class="content">
      <div class="list-wraper" v-for="(item,index) in listData" :key="index">
        <div class="time">{{item.time}}</div>
        <div class="list-item">
          <div class="title">{{item.title}}</div>
          <div class="item-img">
            <img :src="item.imgUrl" alt="活动" />
            <div class="mask" v-show="item.isShouMask">
                <div class="cover">活动结束</div>
            </div>
          </div>
          <div class="introduce">{{item.des}}</div>
          <div class="more">
            <span>查看更多</span>
            <van-icon name="arrow" size="16px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "News",
  data() {
    return {
        listData:[
            {
                time:"11:30",
                title:"新品上市，全场满199减50",
                imgUrl:"https://wxt.sinaimg.cn/large/007XivJ0gy1g78v20obqzj30xc0dwtac.jpg",
                isShouMask:false,
                des:"虽然做了一件好事，但很有可能因此招来他人的无端猜测，例如被质疑是否藏有其他利己动机等，乃至谴责。即便如此，还是要做好事。"
            },
            {
                time:"昨天 12:30",
                title:"新品上市，全场满199减50",
                imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3761064275,227090144&fm=26&gp=0.jpg",
                isShouMask:true,
                des:"虽然做了一件好事，但很有可能因此招来他人的无端猜测，例如被质疑是否藏有其他利己动机等，乃至谴责。即便如此，还是要做好事。"
            },
            {
                time:"2019-07-26 12:30",
                title:"新品上市，全场满199减50",
                imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3761064275,227090144&fm=26&gp=0.jpg",
                isShouMask:true,
                des:"虽然做了一件好事，但很有可能因此招来他人的无端猜测，例如被质疑是否藏有其他利己动机等，乃至谴责。即便如此，还是要做好事。"
            },
        ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  padding: 10px;
  background-color: #fff;
  .list-wraper {
    padding: 5px 10px;
    .time {
      text-align: center;
      font-size: 13px;
      color: #7d7d7d;
    }
    .list-item {
      .title {
        height: 45px;
        line-height: 45px;
        color: #303133;
        font-size: 16px;
      }
      .item-img {
          position: relative;
          height: 130px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 4px;
        }
        .mask{
            position: absolute;
            height: 100%;
            top: 0;
            right: 0;
            left: 0;
            background-color: rgba(0, 0, 0, .5);
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            .cover{
                font-size: 18px;
                color: #fff;
            }
        }
      }
      .introduce {
        color: #606266;
        font-size: 14px;
        line-height: 19px;
        padding: 8px 0;
      }
      .more {
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #e4e7ed;
        span {
          color: #707070;
          font-size: 12px;
        }
      }
    }
  }
}
</style>