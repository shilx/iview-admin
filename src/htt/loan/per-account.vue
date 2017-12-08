<style lang="less" scoped>
    .list-page{
        text-align: center;
        padding-top: 16px;
    }
</style>

<template>
    <div>
        <Card shadow>
            <Form ref="accountForm" :model="accountForm" :rules="ruleInline" inline :show-message="false">
                <FormItem prop="userId"  label="用户ID">
                    <Input style="width: 86px;" type="text" v-model="accountForm.userId" placeholder="用户ID"></Input>
                </FormItem>
                <FormItem prop="name"  label="姓名">
                    <Input style="width: 110px;" type="text" v-model="accountForm.name" placeholder="姓名"></Input>
                </FormItem>
                <FormItem prop="cellphone" label="手机号">
                    <Input style="width: 100px;" v-model="accountForm.cellphone" placeholder="手机号"></Input>
                </FormItem>
                <FormItem prop="idNumber" label="身份证号码">
                    <Input style="width: 170px;" v-model="accountForm.idNumber" placeholder="身份证号码"></Input>
                </FormItem>
                <FormItem prop="operatorName" label="操作员姓名">
                    <Select style="width: 126px" v-model="accountForm.operatorName">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
                <FormItem prop="accountStatusCode" label="开户审核状态">
                    <Select style="width: 110px;" v-model="accountForm.accountStatusCode">
                        <Option value="">全部</Option>
                        <Option value="0">未审核</Option>
                        <Option value="1">通过</Option>
                        <Option value="-1">未通过</Option>
                    </Select>
                </FormItem>
                <FormItem prop="identityStatusCode" label="身份审核状态">
                    <Select style="width: 110px;" v-model="accountForm.identityStatusCode">
                        <Option value="">全部</Option>
                        <Option value="0">未审核</Option>
                        <Option value="1">通过</Option>
                        <Option value="-1">未通过</Option>
                    </Select>
                </FormItem>
                <br>
                <FormItem>
                    <Button style="width: 82px; height: 34px" type="primary" @click="handleSubmit('accountForm')" :loading="tableLoading">搜索</Button>
                    <Button style="width: 82px; height: 34px;margin-left:8px" @click="handleReset('accountForm')">清空</Button>
                </FormItem>
            </Form>
            <Table stripe :loading="tableLoading" :columns="accountCol" :data="accountList"></Table>
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
        <PerVmodal
            ref="perModal"
            :comList="ModelComList"
            @child-open="openVModel">
        </PerVmodal>
    </div>
</template>

<script>
import util from '@/libs/util';
import PerVmodal from '../common/verify-modal.vue';
export default {
    components:{
        PerVmodal
    },
    data () {
        return {
            filter:{},
            tableLoading: true,
            pageTotal: 10,
            pageCurrent: 1,
            pageSize: 30,
            accountForm: {
                userId: '',
                name: '',
                cellphone: '',
                idNumber: '',
                operatorName: '',
                accountStatusCode: '',
                identityStatusCode: ''
            },
            ruleInline: {
                userId: [
                    {
                        required: false,
                        trigger: 'blur',
                    }
                ],
                name: [
                    {
                        required: false,
                        trigger: 'blur',
                    }
                ],
                cellphone: [
                    {
                        required: false,
                        trigger: 'blur',
                        regexp: new RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/)
                    }
                ],
                idNumber: [
                    {
                        required: false,
                        trigger: 'blur',
                    }
                ],
                operatorName: [
                    {
                        required: false,
                        trigger: 'change',
                    }
                ],
                accountStatusCode: [
                    {
                        required: false,
                        trigger: 'change',
                    }
                ],
                identityStatusCode: [
                    {
                        required: false,
                        trigger: 'change',
                    }
                ],
            },
            accountCol: [
                {
                    title: '会员ID',
                    key: 'userId',
                    width: 80,
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
            ModelComList:[
                {
                    comName: 'realname'
                }
            ]
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            this.tableLoading = true
            const send = {
                ...this.accountForm,
                pageNumber: this.pageCurrent - 1,
                pageSize: this.pageSize
            }
            console.log(send)
            this.$store.dispatch('getList', send).then((res) => {
                this.accountList = res.content
                this.pageTotal = res.totalElements
                this.pageCurrent = res.number + 1
                this.tableLoading = false
            }).catch(error => {
                this.tableLoading = false
                this.$Message.error('请求失败')
            })
        },
        handlePage(page) {
            this.pageCurrent = page
            this.getList()
        },
        handlePageSize(pageSize) {
            this.pageSize = pageSize
            this.getList()
        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('搜索成功!')
                    this.getList()
                } else {
                    this.$Message.error('搜索失败!')
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        },
        timeR(h, params) {
            return h('div',
                util.filters.time(params.row.submitTime,'yyyy-MM-dd hh:mm:ss')
            )
        },
        operatR(h, params) {
            return h('div', [
                h('Button', {
                    props: {
                        type: 'primary'
                    },
                    on: {
                        click: () => {
                            //打开弹窗
                            console.log(params)
                            this.$refs.perModal.openModel(params.row)
                        }
                    }
                }, '审核')
            ]);
        },
        openVModel() {

        }
    }
}
</script>
