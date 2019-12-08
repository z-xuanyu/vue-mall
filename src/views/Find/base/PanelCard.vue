<template>
    <div class="panel-card">
        <!-- 用户信息 -->
        <div class="container">
            <van-row type="flex" justify="space-between" align="center">
                <van-col class="user-info">
                    <div class="user-avatar">
                        <van-image
                            width="40"
                            height="40"
                            lazy-load
                            src="http://img1.mukewang.com/5b8cf26f0001b4f402000190-100-100.jpg"
                            type="contain"
                        />
                    </div>
                    <div class="user-name-time">
                        <div class="name">一个神一样的男人</div>
                        <div class="time">0:26</div>
                    </div>
                </van-col>
                <van-col class="scan">3412阅读</van-col>
            </van-row>
            <!-- 标题 -->
            <div class="title">这里是标题内容,你能看得见吗?这里是标题内容,你能看得见吗?这里是标题内容,你能看得见吗?</div>
            <!-- 图片 -->
            <van-row class="img-wrapper">
                <van-col :span="8">
                    <van-image
                        lazy-load
                        src="http://images.pinduoduo.com/mrk/2019-11-10/94094de2-34d5-4ecd-a326-bf564f5f83ee.jpg"
                        type="contain"
                    />
                </van-col>
                <van-col :span="8">
                    <van-image
                        lazy-load
                        src="http://images.pinduoduo.com/mrk/2019-11-10/94094de2-34d5-4ecd-a326-bf564f5f83ee.jpg"
                        type="contain"
                    />
                </van-col>
                <van-col :span="8">
                    <van-image
                        lazy-load
                        src="http://images.pinduoduo.com/mrk/2019-11-10/94094de2-34d5-4ecd-a326-bf564f5f83ee.jpg"
                        type="contain"
                    />
                </van-col>
            </van-row>
            <!-- 收藏,转发,采购 -->
            <van-row class="favorite-share" type="flex" justify="space-between" align="center">
                <van-col>
                    <van-icon size=".5rem" name="star-o" />
                    <span>收藏</span>
                </van-col>
                <van-col>
                    <van-icon size=".5rem" name="share" />
                    <span>转发</span>
                </van-col>
                <van-col>
                    <van-button size="mini" round color="red">去购买</van-button>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.panel-card {
    padding: 10px;
    padding-bottom: 0;
    .container {
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        // 用户信息
        .user-info {
            display: flex;
            .user-avatar {
                margin-right: 5px;
            }
            .user-name-time {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 3px;

                .name {
                    color: #000;
                    font-weight: bold;
                }
            }
        }
        .scan {
            color: #bbb;
        }
        // 标题
        .title {
            margin-top: 5px;
            font-size: 14px;
        }
        .img-wrapper {
            margin-top: 10px;
            .van-col {
                padding: 0 3px;
            }
        }
        .favorite-share{
            margin-top: 5px;
            .van-col{
                display: flex;
                align-items: center;
                color: #aaa;
                span{
                    margin-left: 3px;
                }
            }
        }
    }
}
</style>