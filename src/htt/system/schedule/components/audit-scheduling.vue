<style lang="less" scoped>
    .white{
        background-color: white;
    }
    .ivu-tabs{
        margin-bottom: 0;
    }
    .operating{
        padding-right: 24px;
        padding-bottom: 24px;
        padding-top: 24px;
        text-align: right;
    }
    .reservation{
        text-align: right;
        padding-bottom: 17px;
    }
    .scheduleModal{
        .ivu-form-item:last-child{
            margin-bottom: 0
        }
    }
</style>

<template>
    <div>
        <Tabs type="card" :animated="false">
            <TabPane label="立即排班" class="padding-16 no-bd-tabs">
                <slot></slot>
            </TabPane>
            <TabPane label="预约排班" class="padding-16">
                <div class="reservation">
                    <Button type="success" size="large">添加预约排班</Button>
                </div>
                <Table stripe :columns="accountCol" :data="accountList"></Table>
            </TabPane>
        </Tabs>
        <div class="operating white">
            <Button>结束工作</Button>
            <Button type="success">开始工作</Button>
        </div>
        <Modal
            v-model="scheduleModal"
            class="scheduleModal"
            title="修改"
            @on-ok="ok"
            @on-cancel="ok">
            <Form ref="formCustom" :model="formCustom" :label-width="80">
                <FormItem label="日期：" prop="date">
                    <DatePicker
                        type="daterange"
                        format="yyyy/MM/dd"
                        :transfer="true"
                        style="width: 245px">
                    </DatePicker>
                </FormItem>
                <FormItem label="开户审核：" prop="account">
                    <CheckboxGroup v-model="formCustom.account">
                        <Checkbox label="Eat"></Checkbox>
                        <Checkbox label="Sleep"></Checkbox>
                        <Checkbox label="Run"></Checkbox>
                        <Checkbox label="Movie"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="资料审核：" prop="data">
                    <CheckboxGroup v-model="formCustom.data">
                        <Checkbox label="Eat"></Checkbox>
                        <Checkbox label="Sleep"></Checkbox>
                        <Checkbox label="Run"></Checkbox>
                        <Checkbox label="Movie"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="借款审核：" prop="loan">
                    <CheckboxGroup v-model="formCustom.loan">
                        <Checkbox label="Eat"></Checkbox>
                        <Checkbox label="Sleep"></Checkbox>
                        <Checkbox label="Run"></Checkbox>
                        <Checkbox label="Movie"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="认证审核：" prop="certification">
                    <CheckboxGroup v-model="formCustom.certification">
                        <Checkbox label="Eat"></Checkbox>
                        <Checkbox label="Sleep"></Checkbox>
                        <Checkbox label="Run"></Checkbox>
                        <Checkbox label="Movie"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>

<script>
export default {
    // props: {
    //     type: String
    // },
    data () {
        return {
            accountCol: [
                {
                    title: '日期',
                    key: 'userId',
                },
                {
                    title: '操作员',
                    key: 'nickname',
                },
                {
                    title: '操作',
                    key: 'operatorName',
                    align: 'center',
                    render: this.operatR
                }
            ],
            accountList: [{
                userId:1,
                nickname:2,
            }],
            scheduleModal: false,
            formCustom: {
                date:'',
                account:[],
                data:[],
                loan:[],
                certification:[]
            }
        };
    },
    created() {
        console.log(this.type)
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
                            this.scheduleModal = true
                        }
                    }
                }, '修改'),
                h('Button', {
                    props: {
                        type: 'error'
                    },
                    on: {
                        click: () => {
                            console.log(params)
                        }
                    }
                }, '删除')
            ]);
        },
        ok() {
            this.scheduleModal = false
        }
    }
};
</script>

<style>

</style>
