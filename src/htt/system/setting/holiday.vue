<style lang="less" scoped>
</style>

<template>
    <div>
        <Card :padding="0" :dis-hover="true">
            <searcher-tools
                :toolsButton="toolsButton"
                v-on:submit="onSubmit"
                v-on:add="openModal"></searcher-tools>
            <div class="padding-16">
                <Table stripe :columns="accountCol" :data="accountList" class="list"></Table>
            </div>
        </Card>
        <holiday-modal ref="holidayModal"></holiday-modal>
    </div>
</template>

<script>
import searcherTools from '@/htt/components/searcher-tools';
import holidayModal from './components/holiday-modal.vue';
export default {
    name: '',
    components: {
        searcherTools,
        holidayModal
    },
    data () {
        return {
            toolsButton: [
                {
                    type: "success",
                    text: "添加模板",
                    handle: "add"
                }
            ],
            accountCol: [
                {
                    title: '年月',
                    key: 'rephone',
                },
                {
                    title: '假期',
                    key: 'loginunlock',
                },
                {
                    title: '操作员',
                    key: 'payun',
                },
                {
                    title: '操作',
                    key: 'findpw',
                    render: this.operatR
                }
            ],
            accountList: [
                {name:1,
                resetpaypw:1,
                resetloginpw:1,
                resetq:1,
                resfz:1,
                rehandfz:1,
                rephone:1,
                loginunlock:1,
                payun:1}
            ],
        }
    },
    computed: {
        
    },
    methods: {
        operatR(h, params) {
            return h('div', [
                h('Button', {
                    props: {
                        type: 'info'
                    },
                    on: {
                        click: () => {
                            console.log(params)
                            this.$refs.productModal.changeModal = true
                        }
                    }
                }, '修改'),
                h('Button', {
                    props: {
                        type: 'error'
                    },
                    on: {
                        click: () => {
                            this.$refs.productModal.changeModal = true
                        }
                    }
                }, '删除'),
            ]);
        },
        onSubmit(data){
            console.log('onSubmit', data)
        },
        openModal(){
            this.$refs.holidayModal.open = true
        }
    },
};
</script>