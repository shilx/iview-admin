<style lang="less" scoped>

</style>

<template>
    <div>
        <Card :padding="0" :dis-hover="true">
            <searcher-tools
                :formItems="formItems"
                :formButton="formButton"
                v-on:submit="onSubmit"
                v-on:add="openModal"></searcher-tools>
            <div class="pd16">
                <Table stripe :columns="accountCol" :data="accountList" class="list"></Table>
            </div>
        </Card>
        <call-modal ref="callModal"></call-modal>
        <detail-modal ref="detailModal"></detail-modal>
    </div>
</template>

<script>
import searcherTools from '@/htt/components/searcher-tools';
import callModal from './components/call-modal.vue';
import detailModal from './components/detail-modal';
export default {
    name: '',
    components: {
        searcherTools,
        callModal,
        detailModal
    },
    data () {
        return {
            formItems: [{
                type: "input",
                key: "username",
                label: "用户名",
                style: "width:86px;",
                value: ""
            },{
                type: "input",
                key: "truename",
                label: "姓名/企业名称",
                style: "width:110px;",
                value: ""
            },{
                type: "input",
                key: "phone",
                label: "手机",
                style: "width:100px;",
                value: ""
            },{
                type: "input",
                key: "idcard",
                label: "身份证号码/统一社会信用代码",
                style: "width:169px;",
                value: ""
            }],
            formButton: [
                {
                    type: "primary",
                    text: "查询",
                    handle: "submit"
                },{
                    text: "清空",
                    handle: "reset"
                }
            ],
            accountCol: [
                {
                    title: '用户名（姓名）',
                    key: 'resfz',
                },
                {
                    title: '身份证号码',
                    key: 'rehandfz',
                },
                {
                    title: '手机号码',
                    key: 'rephone',
                },
                {
                    title: '注册时间',
                    key: 'loginunlock',
                },
                {
                    title: '开户时间',
                    key: 'payun',
                },
                {
                    title: '可用余额',
                    key: 'balance',
                },
                {
                    title: '冻结金额',
                    key: 'freeze',
                },
                {
                    title: '状态',
                    key: 'status',
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
                payun:1,
                balance:1,
                freeze:1,
                status:1,
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
                        type: 'primary',
                        size: 'small'
                    },
                    on: {
                        click: () => {
                            console.log(params)
                            this.$refs.detailModal.open = true
                        }
                    }
                }, '查看'),
                h('Button', {
                    props: {
                        type: 'default',
                        size: 'small'
                    },
                    on: {
                        click: () => {
                            this.$refs.callModal.open = true
                        }
                    }
                }, '预约'),
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