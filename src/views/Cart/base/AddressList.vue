<template>
  <!-- 地址列表 -->
  <div class="address-list">
    <van-popup v-model="showList" position="bottom">
      <van-nav-bar title="地址列表" left-arrow @click-left="onClickLeft" />
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        disabled-text="以下地址超出配送范围"
        @add="onAdd"
        @edit="onEdit"
        @select="select"
      />
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chosenAddressId: "1",
      showList: false,
      list: [
        {
          id: "1",
          name: "轩钰",
          tel: "15800021934",
          address: "广州市天河区龙洞西大街国敬巷1号"
        },
        {
          id: "2",
          name: "周宣宇",
          tel: "13178592410",
          address: "广州市天河区龙洞西大街国敬巷1号"
        },
        {
          id: "3",
          name: "阿玉",
          tel: "15800021934",
          address: "广州市天河区龙洞西大街国敬巷1号"
        }
      ]
    };
  },
  methods: {
    //   添加新地址
    onAdd() {
      this.$toast("新增地址");
    },
    // 编辑地址
    onEdit(item, index) {
      this.$toast("编辑地址:" + index);
    },
    // 返回
    onClickLeft(){
        this.showList = false;
    },
    // 选中地址触发
    select(data){
      this.showList = false;
      this.$store.dispatch('addressList', data)
    }
  }
};
</script>

<style lang="scss" scoped>
.van-popup--bottom {
  top: 0;
}
</style>