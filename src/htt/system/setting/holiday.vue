<style lang="less" scoped>
.border-b{
    border-bottom: 1px solid #DDDEE1;
    padding: 16px;
}
.ivu-form-item{
    margin-bottom: 0;
}
</style>

<template>
    <div>
        <Card :padding="0" :dis-hover="true">
            <div class="border-b">
                <searcher-tools 
                    :formItem="formItem"
                    :formButton="formButton"
                    :toolsButton="toolsButton"
                    v-on:submit="onSubmit"
                    v-on:add="onAdd"></searcher-tools>
            </div>
            <div class="pd16">
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
            formItem: [
                {
                    type: "input",
                    key: "name",
                    label: "关键词：",
                    style: "width:102px;",
                    value: ""
                },
                {
                    type: "select",
                    options: [
                        {
                            val: 1,
                            text: "北京"
                        },
                        {
                            val: 2,
                            text: "上海"
                        }
                    ],
                    key: "namemark",
                    label: "模板对应产品标示：",
                    style: "width:102px;",
                    value: ""
                }
            ],
            formButton: [
                {
                    type: "primary",
                    text: "查询",
                    handle: "submit"
                },
                {
                    type: "",
                    text: "清空",
                    handle: "clear"
                }
            ],
            toolsButton: [
                {
                    type: "success",
                    text: "添加模板",
                    handle: "add"
                }
            ],
            formData: {

            },
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
        add(){
            this.$refs.holidayModal.open = true
        },
        onSubmit(data){
            console.log('onSubmit', data)
        },
        onAdd(){
            this.$refs.holidayModal.open = true
        }
    },
};
</script>