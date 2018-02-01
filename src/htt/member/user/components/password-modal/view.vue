<style lang="less" scoped>

</style>
<template>
    <Modal
        class="display-modal-footer"
        v-model="open"
        title="查看详情"
        width="740">

        <userinfo></userinfo>

        <opinion></opinion>

    </Modal>
</template>
<script>
import userinfo from './components/user-info';
import opinion from './components/opinion';
export default {
    components: {
        userinfo,
        opinion
    },
    data () {
        return {
            open: false
        };
    },
    methods: {
        confirm () {

        },
        cancel () {
            this.open = false;
        }
    }
};
</script>
