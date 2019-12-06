<template>
  <!-- 地址编辑 -->
  <div class="address-edit">
    <!-- 顶部导航 -->
    <van-nav-bar title="编辑地址" left-arrow @click-left="onBack" />
    <!-- 编辑地址列表 -->
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :address-info="editAddressInfo"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import areas from "../../area/area";
import { mapState } from "vuex";

export default {
  data() {
    return {
      areaList: areas,
      searchResult: []
    };
  },
  methods: {
    // 保存编辑地址
    onSave(item) {
      const editIndex = this.$route.params.editIndex;
      item['address'] = item.province + item.city + item.county + item.addressDetail
      localStorage.setItem("editIndex",editIndex)
      
    },
    // 删除地址
    onDelete() {
      const editIndex = this.$route.params.editIndex;
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true
      });
      setTimeout(() => {
        this.$toast.clear()
        this.$store.dispatch("deleteAddress", editIndex);
        this.$router.back()
      },500);
    },
    onBack() {
      this.$router.back();
    }
  },
  computed: {
    ...mapState(["editAddressInfo"])
  }
};
</script>

<style lang="scss" scoped>
</style>