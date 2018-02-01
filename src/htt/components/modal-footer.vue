<style lang="less" scoped>
.wide-btn{
    width: 96px;
    height: 34px;
}
</style>
<template>
    <div>
        <Button @click="cancel" class="wide-btn">取消</Button>
        <Button @click="confirm" type="success" class="wide-btn">确定</Button>
    </div>
</template>
<script>
export default {
    data () {
        return {

        };
    },
    methods: {
        cancel () {
            this.$emit('onCancel');
        },
        confirm () {
            this.$emit('onConfirm');
        }
    }
};
</script>
