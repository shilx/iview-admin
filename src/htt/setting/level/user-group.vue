<style lang="less" scoped>
    @table-bd: 1px solid #dddee1;
    @gap: 16px;
    .user-group{
        .left{
            border-right: 1px solid #dde;
            padding: 10px 24px 10px 10px;
        }
        .right{
            .sarch-form{
                padding-left: 16px;
                padding-top: 4px;
                border-bottom: 1px solid #DDE;
            }
            .content{
                padding: @gap;
            }
            .table-list{
            }
            .list-page{
                text-align: center;
                padding-top: @gap;
                padding-bottom: @gap;
                border-left: @table-bd;
                border-right: @table-bd;
                border-bottom: @table-bd;
            }
        }
    }
</style>

<template>
    <div>
        <Card :dis-hover="true" class="user-group">
            <Row type="flex">
                <Col span="3" class="left">
                    <Tree :data="groupList" :render="renderContent"></Tree>
                </Col>
                <Col span="21" class="right">
                    <Form ref="accountForm" :model="accountForm" inline :show-message="false" class="sarch-form">
                        <FormItem prop="name" label="用户名">
                            <Input style="width: 110px;" type="text" v-model="accountForm.name" placeholder="用户名"></Input>
                        </FormItem>
                        <FormItem prop="realname" label="姓名">
                            <Input style="width: 110px;" type="text" v-model="accountForm.realname" placeholder="用户名"></Input>
                        </FormItem>
                        <FormItem label="1">
                            <Button style="width: 82px; height: 34px" type="primary" @click="handleSubmit('accountForm')">搜索</Button>
                        </FormItem>
                        <FormItem label="1">
                            <Button style="width: 82px; height: 34px;margin-left:8px" @click="handleReset('accountForm')">清空</Button>
                        </FormItem>
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
                </Col>
            </Row>
        </Card>
        <user-group-modal
            ref="userGroupModal"
            :formData="modalData"></user-group-modal>
    </div>
</template>

<script>
    import userGroupModal from './user-group-modal';
    export default {
        components: {
            userGroupModal
        },
        data () {
            return {
                groupList: [
                    {
                        title: '部门机构',
                        expand: true,
                        render: (h, { root, node, data }) => {
                            return h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%'
                                }
                            }, [
                                h('span', [
                                    h('span', data.title)
                                ]),
                                h('span', {
                                    style: {
                                        display: 'inline-block',
                                        float: 'right',
                                        marginRight: '8px'
                                    }
                                }, [
                                    h('Button', {
                                        props: Object.assign({}, this.buttonProps, {
                                            icon: 'plus',
                                            type: 'primary'
                                        }),
                                        style: {
                                            marginRight: '59px'
                                        },
                                        on: {
                                            click: () => {
                                                this.resetModal()
                                                //添加部门
                                                this.modalData.title = '添加分组'
                                                this.modalData.name = '部门机构'
                                                this.$refs.userGroupModal.newGroupModal = true
                                            }
                                        }
                                    })
                                ])
                            ]);
                        },
                        children: [
                            {
                                title: '风管部',
                                code: 1,
                                children: [
                                    {
                                        title: '法务组',
                                        code: 1,
                                    },
                                    {
                                        title: '审核组',
                                        code: 1,
                                    },
                                    {
                                        title: '催收组',
                                        code: 1,
                                    }
                                ]
                            },
                            {
                                title: '客服部',
                                code: 1,
                                expand: true
                            }
                        ]
                    }
                ],
                buttonProps: {
                    type: 'ghost',
                    size: 'small',
                },
                newItem: '',
                accountForm: {
                    name: '',
                    realname: '',
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
                pageTotal: 10,
                pageCurrent: 1,
                pageSize: 30,
                newGroupModal: false,
                modalData: {
                    parent: '',
                    title: '',
                    name: '',
                    nameRdol: true,
                    position: '1',
                    rank: '',
                    checkbox: [],
                }
            }
        },
        methods: {
            renderContent (h, { root, node, data }) {
                let buttonArray = []
                if(node.parent < 1){
                    buttonArray = [
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'plus'
                            }),
                            style: {
                                marginRight: '4px'
                            },
                            on: {
                                click: () => {
                                    this.append(data)
                                }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'minus'
                            }),
                            style: {
                                marginRight: '4px'
                            },
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'wrench'
                            }),
                            on: {
                                click: () => { console.log(root, node, data) }
                            }
                        })
                    ]
                }
                return h('div', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, [
                    h('span', {
                        'class': {
                            'ivu-tree-title': true
                        }
                    }, data.title),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '8px'
                        }
                    }, [
                        h('Button', {
                            //添加下级
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'plus'
                            }),
                            style: {
                                marginRight: '4px'
                            },
                            on: {
                                click: () => {
                                    //添加部门
                                    this.$refs.userGroupModal.newGroupModal = true
                                }
                            }
                        }),
                        h('Button', {
                            //删除本级
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'minus'
                            }),
                            style: {
                                marginRight: '4px'
                            },
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        }),
                        h('Button', {
                            //设置权限
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'wrench'
                            }),
                            on: {
                                click: () => { 
                                    this.newGroupModal = true 
                                }
                            }
                        })
                    ])
                ]);
            },
            append (data) {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                autofocus: true,
                                placeholder: '请填写名称。'
                            },
                            on: {
                                input: (val) => {
                                    this.newItem = val;
                                }
                            }
                        })
                    },
                    onOk: () => {
                        const children = data.children || []
                        children.push({
                            title: this.newItem,
                            expand: true
                        });
                        this.$set(data, 'children', children)
                    }
                })
            },
            remove (root, node, data) {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
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
                                // this.$refs.verModal.openModel(params.row)
                            }
                        }
                    }, '审核')
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
            resetModal() {
                this.modalData = {
                    parent: '',
                    title: '',
                    name: '',
                    nameRdol: true,
                    position: '1',
                    rank: '',
                    checkbox: [],
                }
            }
        }
    }
</script>
