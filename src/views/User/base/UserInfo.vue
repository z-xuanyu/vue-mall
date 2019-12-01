<template>
  <div class="user">
    <van-row type="flex" justify="space-between" align="center" class="user-info-wrapper">
      <van-col class="user-info">
        <div class="user-avatar m-r-10">
          <img src="http://mall.zhouxuanyu.com/img/face.ed82672d.jpg" />
        </div>
        <div class="user-name">
          <div class="name">你好,{{$Cookies.get("TOKEN")}}</div>
          <div>享受生活,享受Happy Shopping!</div>
        </div>
      </van-col>
      <van-col class="qr-code">
        <van-icon name="qr-invalid" size="0.56rem"></van-icon>
      </van-col>
    </van-row>
    <!-- 开通会员 -->
    <div class="member-wrapper">
      <div class="member">
        <div class="member-left">
          <img src="http://mall.zhouxuanyu.com/img/VIP.21027191.png" />
          <span>开通VIP会员</span>
        </div>
        <div class="member-right">会员特权</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user {
  position: relative;
  .user-info-wrapper {
    padding: 0 15px;
    height: 180px;
    background: linear-gradient(to bottom, #f06c7a 0%, #f06c7a 100%);
    .user-info {
      display: flex;
      align-items: center;
      .user-avatar {
        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
      }
      .user-name {
        color: #fff;
        .name {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 5px;
        }
      }
    }
    .qr-code {
      width: 37px;
      height: 37px;
      background: linear-gradient(270deg, #fbbb37 0, #fcf0d0 105%);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  }
  .member-wrapper {
    padding: 0 10px;
    position: absolute;
    bottom: -30px;
    left: 0;
    right: 0;
    .member {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      height: 60px;
      background: linear-gradient(270deg, #dea96d 0, #f6d59b);
      border-radius: 5px;
      .member-left {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #796335;
        img {
          width: 30px;
          height: 30px;
        }
      }
      .member-right{
          color: #fff;
      }
    }
  }
}
</style>