<style lang="less" scoped>

</style>

<template>
    <div>
        <Card :dis-hover="true">
            <Form ref="accountForm" :model="accountForm" inline :show-message="false" class="sarch-form">
                <Row type="flex" justify="space-between">
                    <Col>
                        <FormItem prop="name" label="姓名">
                            <Input style="width: 110px;" type="text" v-model="accountForm.name" placeholder="用户名"></Input>
                        </FormItem>
                        <FormItem prop="realname" label="用户名">
                            <Input style="width: 110px;" type="text" v-model="accountForm.realname" placeholder="角色名"></Input>
                        </FormItem>
                        <FormItem prop="add" label="手机号码">
                            <Input style="width: 110px;" type="text" v-model="accountForm.add" placeholder="添加人员"></Input>
                        </FormItem>
                        <FormItem>
                            <div slot="label">&nbsp;</div>
                            <Button style="width: 82px; height: 34px" type="primary" @click="handleSubmit('accountForm')">搜索</Button>
                        </FormItem>
                        <FormItem>
                            <div slot="label">&nbsp;</div>
                            <Button style="width: 82px; height: 34px" @click="handleReset('accountForm')">清空</Button>
                        </FormItem>
                    </Col>
                    <Col>
                        <FormItem>
                            <div slot="label">&nbsp;</div>
                            <Button style="width: 82px; height: 34px; padding:0" type="success" @click="addUser">添加操作员</Button>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
            <div class="content">
                <div class="table-list">
                    <Table stripe :columns="accountCol" :data="accountList"></Table>
                </div>
                <Page
                    :total="pageTotal"
                    :current="pageCurrent"
                    :page-size="pageSize"
                    @on-change="handlePage"
                    @on-page-size-change="handlePageSize"
                    show-sizer
                    class-name="list-page">
                </Page>
            </div>
        </Card>
        <user-modal
            ref="userModal"
            :formData="modalData"></user-modal>
    </div>
</template>

<script>
    import userModal from './components/user-modal';
    export default {
        components: {
            userModal
        },
        data () {
            return {
                accountForm: {
                    name: '',
                    realname: '',
                    add: ''
                },
                accountCol: [
                    {
                        title: '角色代码',
                        key: 'userId',
                        // width: 80,
                    },
                    {
                        title: '角色名',
                        key: 'nickname',
                        // width: 160
                    },
                    {
                        title: '添加人员',
                        key: 'cellphone',
                        // width: 160
                    },
                    {
                        title: '用户人数',
                        key: 'idNumber',
                        // width: 200
                    },
                    {
                        title: '状态',
                        key: 'submitTime',
                        render: this.timeR,
                        // width: 200
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        render: this.operatR
                    }
                ],
                accountList: [{
                    userId: '1',
                    nickname: '1',
                    cellphone: '1',
                    idNumber: '1',
                    submitTime: '1'
                }],
                pageTotal: 10,
                pageCurrent: 1,
                pageSize: 30,
                modalData: {
                    type: -1,
                    parent: '',
                    title: '',
                    name: '',
                    nameRdol: true,
                    rank: ''
                }
            }
        },
        methods: {
            operatR(h, params) {
                return h('div', 
                    [h('Button', {
                        props: {
                            type: 'primary'
                        },
                        style: {
                            'marginRight':'8px'
                        },
                        on: {
                            click: () => {
                                console.log(params)
                                this.resetModalData()
                                this.modalData.type = 0
                                this.$refs.userModal.modalOpen = true
                            }
                        }
                    }, '编辑')
                ]);
            },
            handlePage(page) {
                this.pageCurrent = page
                this.getList()
            },
            handlePageSize(pageSize) {
                this.pageSize = pageSize
                this.getList()
            },
            resetModalData() {
                this.modalData = {
                    type: -1,
                    parent: '',
                    title: '',
                    name: '',
                    nameRdol: true,
                    rank: ''
                }
            },
            addUser() {
                this.resetModalData()
                this.modalData.type = 1                
                this.$refs.userModal.modalOpen = true
            }
        }
    }
</script>
