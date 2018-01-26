<style lang="less" scoped>
    .mgt10{
        margin-top: 10px
    }
</style>

<template>
    <div>
        <Card shadow :padding="0">
            <searcher-tools
                :formItems="formItems"
                :formButton="formButton"
                v-on:submit="onSubmit"></searcher-tools>
            <Table class="mgt10" stripe :loading="tableLoading" :columns="accountCol" :data="accountList"></Table>
            <Page
                :total="pageTotal"
                :current="pageCurrent"
                :page-size="pageSize"
                @on-change="handlePage"
                @on-page-size-change="handlePageSize"
                show-sizer
                class-name="list-page">
            </Page>
        </Card>
        <VerVmodal
            ref="verModal"
            :comList="ModelComList"
            @child-open="openVModel">
        </VerVmodal>
    </div>
</template>

<script>
import util from '@/libs/util';
import searcherTools from '@/htt/components/searcher-tools';
import VerVmodal from './components/verify-modal/index.vue';
export default {
    components: {
        searcherTools,
        VerVmodal
    },
    data () {
        return {
            tableLoading: true,
            pageTotal: 10,
            pageCurrent: 1,
            pageSize: 30,
            formItems: [{
                type: 'input',
                key: 'userId',
                label: '用户ID',
                style: 'width: 86px;',
                value: ''
            }, {
                type: 'input',
                key: 'name',
                label: '姓名',
                style: 'width: 110px;',
                value: ''
            }, {
                type: 'input',
                key: 'cellphone',
                label: '手机号',
                style: 'width: 100px;',
                value: ''
            }, {
                type: 'input',
                key: 'idNumber',
                label: '身份证号码',
                style: 'width: 170px;',
                value: ''
            }, {
                type: 'select',
                list: [{
                    val: 1,
                    text: 'beijing'
                }, {
                    val: 2,
                    text: 'shanghai'
                }, {
                    val: 3,
                    text: 'shenzhen'
                }
                ],
                key: 'operatorName',
                label: '产品类型',
                style: 'width:166px;',
                value: ''
            }, {
                type: 'select',
                list: [{
                    val: '',
                    text: '全部'
                }, {
                    val: '0',
                    text: '未审核'
                }, {
                    val: '1',
                    text: '通过'
                }, {
                    val: '-1',
                    text: '未通过'
                }
                ],
                key: 'accountStatusCode',
                label: '产品类型',
                style: 'width:166px;',
                value: ''
            }, {
                type: 'select',
                list: [{
                    val: '',
                    text: '全部'
                }, {
                    val: '0',
                    text: '未审核'
                }, {
                    val: '1',
                    text: '通过'
                }, {
                    val: '-1',
                    text: '未通过'
                }
                ],
                key: 'identityStatusCode',
                label: '产品类型',
                style: 'width:166px;',
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
                    key: 'userId',
                    width: 80
                },
                {
                    title: '用户名',
                    key: 'nickname',
                    width: 160
                },
                {
                    title: '手机号码',
                    key: 'cellphone',
                    width: 160
                },
                {
                    title: '身份证号码',
                    key: 'idNumber',
                    width: 200
                },
                {
                    title: '提交时间',
                    key: 'submitTime',
                    render: this.timeR,
                    width: 200
                },
                {
                    title: '开户审核员',
                    key: 'operatorName',
                    align: 'center'
                },
                {
                    title: '开户审核状态',
                    key: 'accountStatusCode',
                    align: 'center'
                },
                {
                    title: '身份审核员',
                    key: 'identityStaff',
                    align: 'center'
                },
                {
                    title: '身份审核状态',
                    key: 'identityStatus',
                    align: 'center'
                },
                {
                    title: '操作',
                    key: 'action',
                    align: 'center',
                    render: this.operatR
                }
            ],
            accountList: [],
            // 需要显示的tab将以动态组件的方式加载
            ModelComList: [
                {
                    comName: 'realname',
                    tabName: '实名开户详情'
                }, {
                    comName: 'identity',
                    tabName: '身份审核'
                }
            ]
        };
    },
    created () {
        this.getList();
    },
    methods: {
        getList () {
            this.tableLoading = true;
            const send = {
                userId: this.userId,
                name: this.name,
                cellphone: this.cellphone,
                idNumber: this.idNumber,
                operatorName: this.operatorName,
                accountStatusCode: this.accountStatusCode,
                identityStatusCode: this.identityStatusCode,
                pageNumber: this.pageCurrent - 1,
                pageSize: this.pageSize
            };
            console.log(send);
            this.$store.dispatch('getList', send).then((res) => {
                this.accountList = res.content;
                this.pageTotal = res.totalElements;
                this.pageCurrent = res.number + 1;
                this.tableLoading = false;
            }).catch(error => {
                this.tableLoading = false;
                this.$Message.error('请求失败');
                throw error;
            });
        },
        handlePage (page) {
            this.pageCurrent = page;
            this.getList();
        },
        handlePageSize (pageSize) {
            this.pageSize = pageSize;
            this.getList();
        },
        onSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('搜索成功!');
                    this.getList();
                } else {
                    this.$Message.error('搜索失败!');
                }
            });
        },
        timeR (h, params) {
            return h('div',
                util.filters.time(params.row.submitTime, 'yyyy-MM-dd hh:mm:ss')
            );
        },
        operatR (h, params) {
            return h('div', [
                h('Button', {
                    props: {
                        type: 'primary'
                    },
                    on: {
                        click: () => {
                            // 打开弹窗
                            console.log(params);
                            this.$refs.verModal.openModel(params.row);
                        }
                    }
                }, '审核')
            ]);
        },
        openVModel () {

        }
    }
};
</script>
