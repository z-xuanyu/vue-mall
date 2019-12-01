<template>
  <div class="category-content">
    <div class="catrgory-swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            class="swipe-img"
            src="http://t14img.yangkeduo.com/images/2019-11-25/51dddfb854397b9ea8f3572aa4e4cd6d.jpeg?imageMogr2/format/webp/quality/50"
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            class="swipe-img"
            src="http://t16img.yangkeduo.com/phone_adx/20191101160255812_image.png?imageMogr2/format/webp/quality/50"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- grid card -->
    <GridCart :Data="HotData" title="热门推荐" />
    <GridCart :Data="NurseData" title="个人护理保健" />
    <GridCart :Data="HotData" title="大家电" />
    <GridCart :Data="NurseData" title="中式厨电" />
  </div>
</template>

<script>
import GridCart from "../../../components/GridCart";
export default {
  components: {
    GridCart
  },
  data() {
    return {
      HotData: [
        {
          title: "厨房大家电",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-07-16/d12d68ff-cddc-43fe-b521-bda609010d8f.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        },
        {
          title: "卷发棒",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-10-25/c04048fe-37a0-44c7-98ec-e1f6fef87103.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        },
        {
          title: "电视剧",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-10-14/c4629bd1b99323c54c53ee1b146b596b.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        },
        {
          title: "按摩器材",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-06-12/ddd14014-dd9c-4db6-af0c-5a7e6b6659fc.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        },
        {
          title: "理发器",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-06-30/57efccfb-f8f6-46d1-ba9b-0463a851cf80.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        },
        {
          title: "电火锅",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/images/2019-09-27/cfe91de1-1faf-4ea1-ada8-1bc16d55ba18.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }
      ],
      NurseData: [
        {
          title: "剃须刀",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-09-14/037aecec-5300-4a9c-b776-5248d39bd782.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        },
        {
          title: "电动牙刷",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-09-29/a918d893-6af3-4f6f-96ef-40e620548b33.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }, 
        {
          title: "电吹风",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-02-14/d52e515d-f1a1-4b70-9172-ce8cb5d8d7e8.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        },
        {
          title: "美容仪",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-03-24/93ac0292-484d-4450-a70b-30b17fc01d30.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        },
        {
          title: "足浴盆",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-09-28/1068cbdd9a4d52d536d76d31b10fe68f.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        },
        {
          title: "电子秤",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-06-27/e3209063-98e6-4ab6-a27f-99e9eb01763a.png?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        },
        {
          title: "按摩椅",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-05-08/c80748e4-3e0d-46d8-bad4-c9be69d5109d.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        },
        {
          title: "量血压仪",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-06-13/e51e645d-953d-4365-ab86-b0d2806236d2.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        },
        {
          title: "瘦身工具",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-09-29/a918d893-6af3-4f6f-96ef-40e620548b33.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        },
        {
          title: "理发器",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-06-30/57efccfb-f8f6-46d1-ba9b-0463a851cf80.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        },
        {
          title: "按摩器材",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-06-12/ddd14014-dd9c-4db6-af0c-5a7e6b6659fc.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        },
        {
          title: "卷发棒",
          iconUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-10-25/c04048fe-37a0-44c7-98ec-e1f6fef87103.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }, 
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.category-content {
  padding: 10px;
  .catrgory-swipe {
    overflow: hidden;
    .swipe-img {
      width: 100%;
    }
  }
}
</style>