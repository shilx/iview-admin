<style lang="less" scoped>

</style>

<template>
    <div>
        <Card :padding="0" :dis-hover="true">
            <searcher-tools
                    :formItems="formItems"
                    :formButton="formButton"
                    v-on:submit="onSubmit"></searcher-tools>
            <Tabs type="card" :animated="false" class="padding-16">
                <TabPane label="立即排班" class="padding-16 tabs-content-border">
                    <Table stripe :columns="accountCol" :data="accountList" class="list"></Table>
                </TabPane>
                <TabPane label="未处理" class="padding-16 tabs-content-border">
                    未处理
                </TabPane>
                <TabPane label="已处理" class="padding-16 tabs-content-border">
                    已处理
                </TabPane>
            </Tabs>
        </Card>
        <processModal ref="processModal"></processModal>
        <viewModal ref="viewModal"></viewModal>
    </div>
</template>

<script>
import searcherTools from '@/htt/components/searcher-tools';
import processModal from './components/password-modal/process';
import viewModal from './components/password-modal/view';

export default {
    components: {
        searcherTools,
        processModal,
        viewModal
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
                label: '姓名',
                style: 'width:110px;',
                value: ''
            }, {
                type: 'input',
                key: 'phone',
                label: '手机号码',
                style: 'width:110px;',
                value: ''
            }, {
                type: 'input',
                key: 'memberid',
                label: '会员ID',
                style: 'width:110px;',
                value: ''
            }, {
                type: 'input',
                key: 'operator',
                label: '操作员姓名',
                style: 'width:110px;',
                value: ''
            }, {
                type: 'input',
                key: 'idcard',
                label: '身份证号码',
                style: 'width:169px;',
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
                    title: '会员ID',
                    key: 'resfz'
                },
                {
                    title: '用户名（姓名）',
                    key: 'rehandfz'
                },
                {
                    title: '手机号码',
                    key: 'rephone'
                },
                {
                    title: '身份证号码',
                    key: 'loginunlock'
                },
                {
                    title: '提交时间',
                    key: 'payun'
                },
                {
                    title: '操作员',
                    key: 'operator'
                },
                {
                    title: '操作时间',
                    key: 'time'
                },
                {
                    title: '状态',
                    key: 'status'
                },
                {
                    title: '操作',
                    key: 'findpw',
                    render: this.operatR
                }
            ],
            accountList: [
                {
                    resfz: 1,
                    rehandfz: 1,
                    rephone: 1,
                    loginunlock: 1,
                    payun: 1,
                    operator: 1,
                    time: 1,
                    status: 1
                },
                {
                    resfz: 1,
                    rehandfz: 1,
                    rephone: 1,
                    loginunlock: 1,
                    payun: 1,
                    operator: 1,
                    time: 1,
                    status: 2
                }
            ]
        };
    },

    methods: {
        operatR (h, params) {
            return h('div', [
                h('Button', {
                    props: {
                        type: 'info',
                        size: 'small'
                    },
                    on: {
                        click: () => {
                            console.log(params);
                            params.row.status === 1 ? this.$refs.processModal.open = true : this.$refs.viewModal.open = true;
                        }
                    }
                }, params.row.status === 1 ? '处理' : '查看')
            ]);
        },
        onSubmit (data) {
            console.log('onSubmit', data);
        }
    }
};
</script>