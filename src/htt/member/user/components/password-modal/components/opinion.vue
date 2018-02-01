<style lang="less" scoped>
.opinion{
    padding-top: 24px;
    padding-left: 32px;
    padding-right: 32px;
    .textarea{
        width: 100%;
        padding-bottom: 16px;
    }
}
</style>
<template>
    <div class="opinion">
        <p>汇总生成意见：</p>
        <Input
            v-model="textarea"
            type="textarea"
            :autosize="{minRows: 4,maxRows: 6}"
            class="padding-top-16 textarea"
            placeholder="Enter something..."></Input>
        <Button type="primary">生成</Button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            textarea: ''
        };
    },
    methods: {
    }
};
</script>
