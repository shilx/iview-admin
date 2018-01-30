<style lang="less" scoped>

</style>

<template>
    <div>
        <Card :padding="0" :dis-hover="true">
            <searcher-tools
                :formItems="formItems"
                :formButton="formButton"
                v-on:submit="onSubmit"></searcher-tools>
            <div class="padding-16">
                <Table stripe :columns="accountCol" :data="accountList" class="list"></Table>
            </div>
        </Card>
        <block-modal ref="blockModal"></block-modal>
        <detail-modal ref="detailModal"></detail-modal>
    </div>
</template>

<script>
import searcherTools from '@/htt/components/searcher-tools';
import blockModal from './components/blacklist-modal/block';
import detailModal from './components/blacklist-modal/detail';
export default {
    name: '',
    components: {
        searcherTools,
        blockModal,
        detailModal
    },
    data () {
        return {
            formItems: [{
                type: 'input',
                key: 'username',
                label: '用户名',
                style: 'width:86px;',
                value: ''
            }, {
                type: 'input',
                key: 'truename',
                label: '姓名/企业名称',
                style: 'width:110px;',
                value: ''
            }, {
                type: 'input',
                key: 'phone',
                label: '手机',
                style: 'width:100px;',
                value: ''
            }, {
                type: 'input',
                key: 'idcard',
                label: '身份证号码/统一社会信用代码',
                style: 'width:169px;',
                value: ''
            }, {
                type: 'select',
                list: [
                    {
                        val: 1,
                        text: '全部'
                    }, {
                        val: 2,
                        text: '黑牌'
                    }
                ],
                key: 'type',
                label: '会员性质',
                style: 'width:158px;',
                value: ''
            }],
            formButton: [
                {
                    type: 'primary',
                    text: '查询',
                    handle: 'submit'
                }, {
                    text: '清空',
                    handle: 'reset'
                }
            ],
            accountCol: [
                {
                    title: '用户名（姓名）',
                    key: 'resfz'
                },
                {
                    title: '身份证号码-统一社会信用代码',
                    key: 'rehandfz'
                },
                {
                    title: '手机号码',
                    key: 'rephone'
                },
                {
                    title: '逾期次数',
                    key: 'loginunlock'
                },
                {
                    title: '发牌次数',
                    key: 'payun'
                },
                {
                    title: '用户状态',
                    key: 'status'
                },
                {
                    title: '操作',
                    key: 'findpw',
                    render: this.operatR
                }
            ],
            accountList: [
                {name: 1,
                    resetpaypw: 1,
                    resetloginpw: 1,
                    resetq: 1,
                    resfz: 1,
                    rehandfz: 1,
                    rephone: 1,
                    loginunlock: 1,
                    payun: 1,
                    status: 1,
                    payuna: 1}
            ]
        };
    },
    computed: {

    },
    methods: {
        operatR (h, params) {
            return h('div', [
                h('Button', {
                    props: {
                        type: 'primary',
                        size: 'small'
                    },
                    on: {
                        click: () => {
                            console.log(params);
                            this.$refs.detailModal.open = true;
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
                            this.$refs.blockModal.open = true;
                        }
                    }
                }, '发牌')
            ]);
        },
        onSubmit (data) {
            console.log('onSubmit', data);
        }
    }
};
</script>