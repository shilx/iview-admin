<style lang="less" scoped>
.border-b{
    border-bottom: 1px solid #DDDEE1;
    padding: 16px;
    .ivu-form-item{
        margin-bottom: 0;
    }
}
.text-r{
    text-align: right;
}
.pdb16{
    padding-bottom: 16px;
}
</style>

<template>
    <div>
        <Tabs type="card" :animated="false">
            <TabPane label="网站基础">
                <Row type="flex" align="bottom" class="border-b">
                    <Col span="12">
                        <Form ref="accountForm" :model="accountForm" inline :show-message="false" class="sarch-form">
                            <FormItem prop="name" label="产品类型：">
                                <Select style="width: 126px" v-model="accountForm.name">
                                    <Option value="beijing">New York</Option>
                                    <Option value="shanghai">London</Option>
                                    <Option value="shenzhen">Sydney</Option>
                                </Select>
                            </FormItem>
                            <FormItem>
                                <div slot="label">&nbsp;</div>
                                <Button style="width: 82px; height: 34px" type="primary" @click="handleSubmit('accountForm')">查询</Button>
                            </FormItem>
                        </Form>
                    </Col>
                    <Col span="12" class="text-r">
                        <Button style="width: 82px; height: 34px" type="success" @click="openupdateModal">新增</Button>
                    </Col>
                </Row>
                <div class="pd16">
                    <Table stripe :columns="accountCol" :data="accountList" class="list"></Table>
                </div>
            </TabPane>
            <TabPane label="借贷">
                借贷
            </TabPane>
            <TabPane label="社交">
                社交
            </TabPane>
        </Tabs>
        <update-modal ref="updateModal"></update-modal>
    </div>
</template>

<script>
import updateModal from './components/update-modal.vue';
export default {
    name: '',
    components: {
        updateModal
    },
    data () {
        return {
            accountForm: {
                name: '',
            },
            accountCol: [
                {
                    title: '版本号',
                    key: 'name'
                },
                {
                    title: '内容',
                    key: 'resetpaypw',
                },
                {
                    title: '最后修改时间',
                    key: 'resetloginpw',
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
                            this.$refs.updateModal.changeModal = true
                        }
                    }
                }, '修改'),
                h('Button', {
                    props: {
                        type: 'error'
                    },
                    on: {
                        click: () => {
                            this.$refs.updateModal.changeModal = true
                        }
                    }
                }, '删除')
            ]);
        },
        openupdateModal() {
            this.$refs.updateModal.open = true
        },
    }
};
</script>