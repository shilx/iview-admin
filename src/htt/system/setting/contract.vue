<style lang="less" scoped>
.border-b{
    border-bottom: 1px solid #DDDEE1;
    padding: 16px;
}
.ivu-form-item{
    margin-bottom: 0;
}
</style>

<template>
    <div>
        <Card :padding="0" :dis-hover="true">
            <div class="border-b">
                <Form ref="formData" :model="formData" inline :show-message="false" class="sarch-form">
                    <Row type="flex" justify="space-between">
                        <Col>
                            <FormItem prop="name" label="模板编号：">
                                <Input
                                    v-model="formData.name"
                                    style="width:102px;"></Input>
                            </FormItem>
                            <FormItem prop="name" label="模板名称：">
                                <Input
                                    v-model="formData.name"
                                    style="width:102px;"></Input>
                            </FormItem>
                            <FormItem prop="name" label="模板对应产品标示：">
                                <Select style="width: 112px" v-model="formData.name">
                                    <Option value="beijing">New York</Option>
                                    <Option value="shanghai">London</Option>
                                    <Option value="shenzhen">Sydney</Option>
                                </Select>
                            </FormItem>
                            <FormItem prop="name" label="创建时间：">
                                <DatePicker
                                type="daterange"
                                format="yyyy/MM/dd"
                                :transfer="true"
                                style="width: 200px">
                            </DatePicker>
                            </FormItem>
                            <FormItem prop="name" label="更新时间：">
                                <DatePicker
                                type="daterange"
                                format="yyyy/MM/dd"
                                :transfer="true"
                                style="width: 200px">
                            </DatePicker>
                            </FormItem>
                            <FormItem>
                                <div slot="label">&nbsp;</div>
                                <Button style="width: 82px; height: 34px" type="primary" @click="handleSubmit('formData')">查询</Button>
                            </FormItem>
                            <FormItem>
                                <div slot="label">&nbsp;</div>
                                <Button style="width: 82px; height: 34px" @click="handleSubmit('formData')">清空查询</Button>
                            </FormItem>
                        </Col>
                        <Col class="text-r">
                            <FormItem>
                                <div slot="label">&nbsp;</div>
                                <Button style="width: 82px; height: 34px" type="success" @click="add">添加模板</Button>
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div class="pd16">
                <Table stripe :columns="accountCol" :data="accountList" class="list"></Table>
            </div>
        </Card>
        <contract-modal ref="contractModal"></contract-modal>
    </div>
</template>

<script>
import contractModal from './components/contract-modal.vue';
export default {
    name: '',
    components: {
        contractModal
    },
    data () {
        return {
            formData: {

            },
            accountCol: [
                {
                    title: 'ID',
                    width: 84,
                    key: 'name',
                    fixed: 'left'
                },
                {
                    title: '模板编号',
                    width: 200,
                    key: 'resetpaypw',
                },
                {
                    title: '模板名称',
                    width: 200,
                    key: 'resetloginpw',
                },
                {
                    title: '业务代码',
                    width: 200,
                    key: 'resetq',
                },
                {
                    title: '创建时间',
                    width: 200,
                    key: 'resfz',
                },
                {
                    title: '修改时间',
                    width: 200,
                    key: 'rehandfz',
                },
                {
                    title: '所属产品标示',
                    width: 200,
                    key: 'rephone',
                },
                {
                    title: '签约方数量',
                    width: 200,
                    key: 'loginunlock',
                },
                {
                    title: '状态',
                    width: 200,
                    key: 'payun',
                },
                {
                    title: '操作',
                    width: 230,
                    key: 'findpw',
                    fixed: 'right',
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
                            this.$refs.productModal.changeModal = true
                        }
                    }
                }, '修改'),
                h('Button', {
                    props: {
                        type: 'error'
                    },
                    on: {
                        click: () => {
                            this.$refs.productModal.changeModal = true
                        }
                    }
                }, '删除'),
                h('i-switch', {
                    style: {
                        marginLeft: '8px'
                    },
                    props: {
                        size: 'large'
                    },
                }, [
                    h('span', {
                        slot:'open'
                    },'启用'),
                    h('span', {
                        slot:'close'
                    },'禁用')
                ])
            ]);
        },
        add(){
            this.$refs.contractModal.open = true
        }
    },
};
</script>