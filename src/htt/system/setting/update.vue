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
            <TabPane label="网站基础">
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
            <TabPane label="借贷">
                借贷
            </TabPane>
            <TabPane label="社交">
                社交
            </TabPane>
        </Tabs>
        <update-modal ref="updateModal"></update-modal>
    </div>
</template>

<script>
import searcherTools from '@/htt/components/searcher-tools';
import updateModal from './components/update-modal.vue';
export default {
    name: '',
    components: {
        searcherTools,
        updateModal
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
                    title: '版本号',
                    key: 'name'
                },
                {
                    title: '内容',
                    key: 'resetpaypw',
                },
                {
                    title: '最后修改时间',
                    key: 'resetloginpw',
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
                            this.$refs.updateModal.changeModal = true
                        }
                    }
                }, '修改'),
                h('Button', {
                    props: {
                        type: 'error'
                    },
                    on: {
                        click: () => {
                            this.$refs.updateModal.changeModal = true
                        }
                    }
                }, '删除')
            ]);
        },
        onSubmit(data){
            console.log('onSubmit', data)
        },
        openModal() {
            this.$refs.updateModal.open = true
        },
    }
};
</script>