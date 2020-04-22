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
            <van-row
                v-for="(item,index) in goodsList"
                :key="index"
                @click="goDetail"
                class="hot-goods-item m-b-10 bg-white"
            >
                <van-col :span="8">
                    <van-image lazy-load radius="3px" :src="item.pic" />
                </van-col>
                <!-- 抢购商品信息 -->
                <van-col :span="16" class="goods-info">
                    <div class="van-ellipsis goods-title">{{item.title}}</div>
                    <!-- 标题下面内容部分 -->
                    <van-row type="flex" justify="space-between" align="center">
                        <van-col :span="14">
                            <div class="price">
                                <span>￥{{item.maxGroupPrice}}</span>
                                <s>￥{{item.marketPrice}}</s>
                            </div>
                            <van-progress
                                color="#f2826a"
                                stroke-width="7"
                                pivot-text
                                :percentage="item.percentage"
                            />
                            <div class="purchased">{{item.desc}}</div>
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
export default {
    data() {
        return {
            goodsList: [
                {
                    goodsId: 131,
                    title:
                        "【法国男鞋 直降1800】海外名品 全新科技5D飞织潮流休闲鞋男鞋户外运动鞋轻质旅游鞋跑步鞋 米灰色-官方正版 39",
                    pic:
                        "https://img30.360buyimg.com/mobilecms/s280x280_jfs/t1/114278/9/424/102046/5e8c86f6E93665a3f/1eae43511127041d.jpg",
                    marketPrice: "333.88",
                    maxGroupPrice: "99.00",
                    percentage: 78,
                    desc: "已抢购477件"
                },
                {
                    goodsId: 132,
                    title:
                        "2019新款秋冬季连帽卫衣女韩版潮宽松女学生ins羊羔毛绒加绒加厚",
                    pic:
                        "http://t00img.yangkeduo.com/goods/images/2018-09-09/cf5d55c606d95f18ecc0b3e73c0a9498.jpeg",
                    marketPrice: "198.00",
                    maxGroupPrice: "59.00",
                    percentage: 85,
                    desc: "已抢购675件"
                },
                {
                    goodsId: 133,
                    title:
                        "峰米 激光电视4K Cinema 手机投影机 家用投影仪(含赠菲涅尔硬屏 4K超高清 护眼认证 小米视频源 64GB大存储)",
                    pic:
                        "https://img12.360buyimg.com/mobilecms/s280x280_jfs/t1/87217/3/19558/187556/5e9ec525E5d441b6f/5b46bfa39113faa2.jpg.webp",
                    marketPrice: "896.00",
                    maxGroupPrice: "499.00",
                    percentage: 38,
                    desc: "已抢购149件"
                }
            ]
        };
    },
    methods: {
        goDetail() {
            this.$router.push("/detail?goods_id=52157500821");
        }
    }
};
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