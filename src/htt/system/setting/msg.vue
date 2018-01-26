<style lang="less" scoped>

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
        <msg-modal ref="msgModal"></msg-modal>
    </div>
</template>

<script>
import searcherTools from '@/htt/components/searcher-tools';
import msgModal from './components/msg-modal.vue';
export default {
    name: '',
    components: {
        searcherTools,
        msgModal
    },
    data () {
        return {
            formItems: [{
                type: "input",
                key: "name",// 字段名
                label: "关键词",// 描述
                style: "width:166px;",// label宽
                value: ""// 默认值
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
                    text: "添加模板",
                    handle: "add"
                }
            ],
            accountCol: [
                {
                    title: '消息编码',
                    key: 'resfz',
                },
                {
                    title: '消息名称',
                    key: 'rehandfz',
                },
                {
                    title: '消息类型',
                    key: 'rephone',
                },
                {
                    title: '消息标题',
                    key: 'loginunlock',
                },
                {
                    title: '备注',
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
            this.$refs.msgModal.open = true
        }
    },
};
</script>