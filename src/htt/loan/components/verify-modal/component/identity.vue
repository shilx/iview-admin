<style lang="less" scoped>
    .ivu-form-item{
        margin-bottom: 8px;
    }
    .addr{
        margin-top: 11px;
        margin-bottom: 32px;
    }
    .text{
        margin-bottom: 16px;
    }
    .avatar{
        img{
            width: 194px;
            height: 118px;
        }
    }
</style>

<template>
    <div class="content">
        <div class="avatar">
            <div class="text">合同送达地址：中国大陆浙江省杭州市滨江区</div>
            <div class="text">手持证件照（<span class="origin">重传</span>）</div>
            <img src="" alt="">
            <img src="" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'identity',
    props: {
        
    },
    data () {
        return {
            userInfo:{
                input: 1
            }
        }
    },
    created(){
        
    },
    computed: {
        
    },
    methods: {
        getInfo() {
            console.log('获取数据')
        }
       
    }
};
</script>
