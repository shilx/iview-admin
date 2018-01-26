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
            <searcher-tools
                    :formItems="formItems"
                    :formButton="formButton"
                    :toolsButton="toolsButton"
                    v-on:submit="onSubmit"
                    v-on:add="openModal"></searcher-tools>
            <div class="padding-16">
                <Table stripe :columns="accountCol" :data="accountList" class="list"></Table>
            </div>
        </Card>
        <contract-modal ref="contractModal"></contract-modal>
    </div>
</template>

<script>
import searcherTools from '@/htt/components/searcher-tools';
import contractModal from './components/contract-modal.vue';
export default {
    name: '',
    components: {
        searcherTools,
        contractModal
    },
    data () {
        return {
            formItems: [{
                type: "input",
                key: "num",
                label: "模板编号",
                value: ""
            },{
                type: "input",
                key: "name",
                label: "模板名称",
                value: ""
            }],
            formButton: [
                {
                    type: "primary",
                    text: "查询",
                    handle: "submit"
                },{
                    text: "清空查询",
                    handle: "reset"
                }
            ],
            toolsButton: [
                {
                    type: "success",
                    text: "新增",
                    handle: "add"
                }
            ],
            accountCol: [
                {
                    title: 'ID',
                    width: 84,
                    key: 'name',
                    fixed: 'left'
                },
                {
                    title: '模板编号',
                    width: 200,
                    key: 'resetpaypw',
                },
                {
                    title: '模板名称',
                    width: 200,
                    key: 'resetloginpw',
                },
                {
                    title: '业务代码',
                    width: 200,
                    key: 'resetq',
                },
                {
                    title: '创建时间',
                    width: 200,
                    key: 'resfz',
                },
                {
                    title: '修改时间',
                    width: 200,
                    key: 'rehandfz',
                },
                {
                    title: '所属产品标示',
                    width: 200,
                    key: 'rephone',
                },
                {
                    title: '签约方数量',
                    width: 200,
                    key: 'loginunlock',
                },
                {
                    title: '状态',
                    width: 200,
                    key: 'payun',
                },
                {
                    title: '操作',
                    width: 230,
                    key: 'findpw',
                    fixed: 'right',
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
                h('i-switch', {
                    style: {
                        marginLeft: '8px'
                    },
                    props: {
                        size: 'large'
                    },
                }, [
                    h('span', {
                        slot:'open'
                    },'启用'),
                    h('span', {
                        slot:'close'
                    },'禁用')
                ])
            ]);
        },
        onSubmit(data){
            console.log('onSubmit', data)
        },
        openModal(){
            this.$refs.contractModal.open = true
        }
    },
};
</script>