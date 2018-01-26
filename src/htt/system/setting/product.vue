<style lang="less" scoped>
.border-b{
    border-bottom: 1px solid #DDDEE1;
    padding: 16px;
    .ivu-form-item{
        margin-bottom: 0;
    }
}
.text-r{
    text-align: right;
}
.pdb16{
    padding-bottom: 16px;
}
</style>

<template>
    <div>
        <Tabs type="card" :animated="false">
            <TabPane label="产品">
                <searcher-tools
                    :formItems="formItems"
                    :formButton="formButton"
                    :toolsButton="toolsButton"
                    v-on:submit="onSubmit"
                    v-on:add="openModal"></searcher-tools>
                <div class="padding-16">
                    <Table stripe :columns="accountCol" :data="accountList" class="list"></Table>
                </div>
            </TabPane>
            <TabPane label="产品类型">
                <div class="padding-16">
                    <div class="pdb16 text-r">
                        <Button style="height: 34px" type="success" @click="openTypeModal">添加产品类型</Button>
                    </div>
                    <Table stripe :columns="accountCol1" :data="accountList" class="list"></Table>
                </div>
            </TabPane>
        </Tabs>
        <product-modal ref="productModal"></product-modal>
    </div>
</template>

<script>
import searcherTools from '@/htt/components/searcher-tools';
import productModal from './components/product-modal.vue';
export default {
    name: '',
    components: {
        searcherTools,
        productModal
    },
    data () {
        return {
            formItems: [{
                type: "select",
                list: [{
                        val: 1,
                        text: "北京"
                    },{
                        val: 2,
                        text: "上海"
                    }
                ],
                key: "type",
                label: "产品类型",
                style: "width:166px;",
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
                    title: '产品类型',
                    width: 84,
                    key: 'name',
                    fixed: 'left'
                },
                {
                    title: '产品名称',
                    width: 200,
                    key: 'resetpaypw',
                },
                {
                    title: '单笔借款金额范围 借款期限范围（月）',
                    width: 200,
                    key: 'resetloginpw',
                },
                {
                    title: '借款期限范围（天）',
                    width: 200,
                    key: 'resetq',
                },
                {
                    title: '年化利率',
                    width: 200,
                    key: 'resfz',
                },
                {
                    title: '担保方式',
                    width: 200,
                    key: 'rehandfz',
                },
                {
                    title: '上线时间',
                    width: 200,
                    key: 'rephone',
                },
                {
                    title: '下线时间',
                    width: 200,
                    key: 'loginunlock',
                },
                {
                    title: '操作员|操作',
                    width: 200,
                    key: 'payun',
                },
                {
                    title: '操作',
                    width: 200,
                    key: 'findpw',
                    fixed: 'right',
                    render: this.operatR
                }
            ],
            accountCol1: [
                {
                    title: '产品类型',
                    key: 'name',
                },
                {
                    title: '操作员|操作',
                    key: 'payun',
                },
                {
                    title: '操作',
                    key: 'findpw',
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
                }, '删除')
            ]);
        },
        onSubmit(data){
            console.log('onSubmit', data)
        },
        openModal() {
            this.$refs.productModal.addModal = true
        },
        openTypeModal() {
            this.$refs.productModal.typeModal = true
        }
    }
};
</script>