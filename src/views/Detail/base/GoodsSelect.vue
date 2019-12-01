<template>
<!-- 商品选购 -->
    <div class="goods-select">
        <!-- 选购 -->
        <van-row type="flex" justify="space-between" align="center">
            <van-col span="4" class="text-bold text-center">
                已选
            </van-col>
            <van-col span="16">
                个性水滴耳环【A2】,1个，可选服务
            </van-col>
            <van-col span="4" class="text-right">
                <van-icon name="weapp-nav" size=".56rem" />
            </van-col>
        </van-row>
        <!-- 送货地址 -->
        <van-row type="flex" justify="space-between" align="center" class="address">
            <van-col span="4" class="text-bold text-center">
                送至
            </van-col>
            <van-col span="16">
                <div class="p-t-b-5">广东省广州市天河区</div>
                <div>今日23:59前完成下单，今天即可发货，预计明天中午12:30分前即可送达</div>
            </van-col>
            <van-col span="4" class="text-right">
                <van-icon name="weapp-nav" size=".56rem" />
            </van-col>
        </van-row>
        <!-- 运费 -->
        <van-row>
            <van-col span="4" class="bold text-center">
                运费
            </van-col>
            <van-col span="20">
                在线支付免运费
            </van-col>
        </van-row>
        <!-- 运费 提示 -->
        <van-row type="flex" class="tips">
            <van-col class="m-r-10" v-for="(item,index) in 5" :key="index">
                <van-icon name="checked" class="text-middle" />
                <span class="text-middle">可配送海外</span>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.goods-select{
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
    .address{
        padding: 10px 0;
    }
    .tips{
        padding: 10px 20px 10px 10px;
        color: #999;
        flex-wrap: wrap;
    }
}
</style>