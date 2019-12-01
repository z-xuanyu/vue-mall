<template>
<!-- 商品评价 -->
    <div class="goods-comment">
        <van-row type="flex" justify="space-between">
            <van-col span="4" class="text-bold">
                评价
            </van-col>
            <van-col span="6" class="view-all text-right">
                <div class="more">查看全部</div>
                <van-icon name="weapp-nav" size=".56rem" />
            </van-col>
        </van-row>
        <!-- 评论用户信息 -->
        <van-row type="flex" align="center">
            <van-col>
                <img class="avatar m-r-5" src="http://t00img.yangkeduo.com/goods/images/2019-10-30/526f64fc7a60b40159ae57355ecea78f.jpeg" width="30px" height="30px">
            </van-col>
            <van-col>
                神一样的男人
            </van-col>
        </van-row>
        <!-- 评论内容 -->
        <div class="comment-content">
            物流很快，很适合我的风格，给个好评！！！！
        </div>
        <!-- 所购买的商品 -->
        <div class="user-buy-goods">
            颜色：叠层钛钢流苏耳环
        </div>
        <!-- 全部评论 -->
        <van-row type="flex" justify="center">
            <van-col class="w-80">
                <van-button type="default" block round size="mini">查看全部评价</van-button>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.goods-comment{
    padding: 10px;
    margin-top: 10px;
    background-color: #fff;
    .view-all{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: red;
        .more{
            font-size: 10px;
            margin-right: 5px;
        }
    }
    .avatar{
        border-radius: 50%;
    }
    .user-buy-goods{
        padding: 10px 0;
        color: #999;
    }
    .w-80{
        width: 80px;
    }
}
</style>