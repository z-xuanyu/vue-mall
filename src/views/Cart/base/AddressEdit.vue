<template>
  <!-- 联系人编辑 -->
  <div class="address-edit">
    <van-popup v-model="showEdit" position="bottom">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </van-popup>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>