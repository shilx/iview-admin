<style lang="less" scoped>
    .copy-blank{
        height: 38px;
    }
    .copy{
        color: #9EA7B4;
        text-align: center;
        position: fixed;
        bottom: 12px;
        z-index: -1;
        width: calc(~"100% - 200px");
    }
</style>

<template>
    <div>
        <div class="copy-blank"></div>
        <div class="copy" :style="copyStyle">Copyright &copy; 2014 - {{year}} 杭州红天桃金融服务有限公司</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            year: 2017,
            copyStyle: {
                // "position":"absolute"
            }
        };
    },
    created () {
        this.year = (new Date()).getFullYear();
    },
    mounted () {
        // this.$nextTick(() => {
        //     var timeId
        //     window.addEventListener('resize', function () {
        //         clearTimeout(timeId)
        //         timeId = setTimeout(() => {
        //             // 内容头
        //             const mainHead = document.querySelector('.main-header-con')
        //             // 导航固定占用高度
        //             const headHeight = mainHead.offsetTop + mainHead.offsetHeight
        //             // 内容最小高度
        //             const conMinHeight = window.screen.availHeight - headHeight
        //             // 内容当前高度
        //             const conHeight = document.querySelector('.single-page-con').offsetHeight

        //             if(conHeight <= conMinHeight){
        //                 this.copyStyle.position = "relative"
        //             }else{
        //                 this.copyStyle.position = "absolute"
        //             }
        //         },500)
        //     });
        // })
    }
};
</script>
