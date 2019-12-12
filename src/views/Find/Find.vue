<template>
    <div class="find">
        <!-- 顶部导航 -->
        <van-sticky>
             <van-nav-bar title="发现" />
        </van-sticky>
        <!-- 选项卡 -->
        <van-tabs sticky :offset-top="46" v-model="active" title-active-color="#ee0a24" :swipe-threshold="6">
            <van-tab title="全部">
				<panel-card v-for="(item,index) in 6" :key="index"></panel-card>
			</van-tab>
            <van-tab title="美妆">美妆内容</van-tab>
            <van-tab title="新品">新品内容</van-tab>
            <van-tab title="晒单">晒单</van-tab>
            <van-tab title="晒单">晒单</van-tab>
            <van-tab title="晒单">晒单</van-tab>
        </van-tabs>
        <!-- 底部导航 -->
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import FooterBar from "../../components/FooterBar";
import PanelCard from "./base/PanelCard"
export default {
    components: {
        FooterBar,
		PanelCard
    },
    data() {
        return {
            active: 0
        };
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
</style>