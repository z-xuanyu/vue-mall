<template>
    <div class="logistics">
        <!-- 顶部标题  -->
        <van-nav-bar title="物流跟踪" left-arrow @click-left="onBack" />
        <!-- 快递信息 -->
        <van-row type="flex" align="center" justify="center" class="m-t-10">
            <van-col :span="2">
                <van-icon name="logistics" size=".5rem" />
            </van-col>
            <van-col :span="20">
                <div class="name">顺丰快递</div>
                <div class="single-number">物流订单：9641224511</div>
            </van-col>
        </van-row>
        <!-- 用户信息 -->
        <van-row type="flex" align="center" justify="center" class="m-t-10">
            <van-col :span="2">
                <van-icon name="location-o" size=".5rem" />
            </van-col>
            <van-col :span="20">
                <div class="user-name">
                    <span>周宣宇</span>
                    <span>15800021934</span>
                </div>
                <div class="user-address">
                    广东省广州市天河区龙洞西大街国敬巷1号
                </div>
            </van-col>
        </van-row>
        
        <!-- 物流信息 -->
        <van-steps direction="vertical" active-color="red" :active="0">
            <van-step>
                <h4>在官网“运单资料”，可查看签收人信息在官网运单资料查询 。</h4>
                <p>2019-07-12 12:40</p>
            </van-step>
            <van-step>
                <h4>已经签收，感谢使用顺丰，期待再次为您服务 </h4>
                <p>2019-07-12 12:40</p>
            </van-step>
            <van-step>
                <h4>正在派送途中，请您准备签收(派件人：xxx,电话：1346464546)</h4>
                <p>2019-07-12 12:40</p>
            </van-step>
            <van-step>
                <h4>快件到达【广州市海珠区北山村营业部】</h4>
                <p>2019-07-12 12:40</p>
            </van-step>
            <van-step>
                <h4>快件在【广州新塘集散中心】已装车，准备发往【广州市海珠区北山村营业部】</h4>
                <p>2019-07-12 12:40</p>
            </van-step>
            <van-step>
                <h4>顺丰速运 已经取快件</h4>
                <p>2019-07-12 12:40</p>
            </van-step>
        </van-steps>
    </div>
</template>

<script>
export default {
    methods: {
        // 路由返回
        onBack() {
            this.$router.back();
        }
    }
};
</script>

<style lang="scss" scoped>
.logistics {
    background-color: #fff;
}
</style>