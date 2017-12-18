<style lang="less">
    .team_task{
        .ivu-badge{
            margin-left: 4px;
        }
        .ivu-tabs-tabpane{
            padding: 17px;
            background-color: white;
        }
    }
</style>

<template>
    <div class="team_task">
        <Tabs type="card" :animated="false">
            <TabPane :label="all" class="all">
                全部的内容<br>
                <Table :columns="accountCol" :data="accountList"></Table>
            </TabPane>
            <TabPane :label="open" class="open">
                开户审核的内容<br>
                <Table :columns="accountCol" :data="accountList"></Table>
            </TabPane>
            <TabPane :label="loan" class="loan">
                借款审核的内容<br>
                <Table :columns="accountCol" :data="accountList"></Table>
            </TabPane>
            <TabPane :label="survey" class="survey">
                第三方排查的内容<br>
                <Table :columns="accountCol" :data="accountList"></Table>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
export default {
    name: 'team_task',
    data () {
        return {
            all: h => {
                return h('div', [
                    h('span', '全部'),
                    h('Badge', {
                        props: {
                            count: 2
                        }
                    })
                ])
            },
            open: h => {
                return h('div', [
                    h('span', '开户审核'),
                    h('Badge', {
                        props: {
                            count: 2
                        }
                    })
                ])
            },
            loan: h => {
                return h('div', [
                    h('span', '借款审核'),
                    h('Badge', {
                        props: {
                            count: 2
                        }
                    })
                ])
            },
            survey: h => {
                return h('div', [
                    h('span', '第三方排查'),
                    h('Badge', {
                        props: {
                            count: 2
                        }
                    })
                ])
            },
            accountCol: [
                {
                    title: '流程名称',
                    key: 'name'
                },
                {
                    title: '用户名（姓名）',
                    key: 'user',
                },
                {
                    title: '任务名称',
                    key: 'task',
                },
                {
                    title: '办理人',
                    key: 'pres',
                },
                {
                    title: '提交时间',
                    key: 'time',
                },
                {
                    title: '操作',
                    key: 'op',
                    align: 'center',
                    render: this.operatR
                }
            ],
            accountList: [],
        };
    },
    created() {
        let list = []
        for (let index = 0; index < 10; index++) {
            list.push({
                name: 1,
                user: 1,
                task: 1,
                pres: 1,
                time: 1,
                op: 1
            })
        }
        this.accountList = list
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
                            //打开弹窗
                            console.log(params)
                        }
                    }
                }, '审核'),
                h('Button', {
                    props: {
                        size: 'small'
                    },
                    on: {
                        click: () => {
                            //打开弹窗
                            console.log(params)
                        }
                    }
                }, '指派')
            ]);
        }
    }
};
</script>

<style>

</style>
