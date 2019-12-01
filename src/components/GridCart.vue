<template>
  <div class="grid-card">
    <van-row class="title">
      <van-col>{{title}}</van-col>
    </van-row>
    <van-grid :column-num="column" class="border-r-5">
        
      <van-grid-item v-for="(item,index) in Data" :key="index" :text="item.title">
          <div slot="icon">
              <img class="icon-img" :src="item.iconUrl" alt="item.title">
          </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:"标题"
        },
        column:{
            type:Number,
            default:3
        },
        Data:Array
    }
};
</script>

<style lang="scss" scoped>
.grid-card{
    margin-top: 10px;
    .title{
        padding: 0 0 5px 5px;
    }
    .border-r-5{
        border-radius: 5px;
        overflow: hidden;
        .icon-img{
            width: 56px;
            height: 56px;
        }
    }
}
</style>