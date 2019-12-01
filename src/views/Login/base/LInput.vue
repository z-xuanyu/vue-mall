<template>
    <div>
        <van-field :type="type" :placeholder="placeholder" v-model="userName" />
    </div>
</template>

<script>
    export default {
        props:{
            type:{
                type:String,
                default:"text"
            },
            placeholder:{
                type:String,
                default:""
            }
        },
        data() {
            return {
                userName: "",
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>