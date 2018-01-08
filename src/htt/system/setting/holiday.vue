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
                            <FormItem prop="name" label="关键词：">
                                <Input
                                    v-model="formData.name"
                                    style="width:102px;"></Input>
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
        <holiday-modal ref="holidayModal"></holiday-modal>
    </div>
</template>

<script>
import holidayModal from './components/holiday-modal.vue';
export default {
    name: '',
    components: {
        holidayModal
    },
    data () {
        return {
            formData: {

            },
            accountCol: [
                {
                    title: '年月',
                    key: 'rephone',
                },
                {
                    title: '假期',
                    key: 'loginunlock',
                },
                {
                    title: '操作员',
                    key: 'payun',
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
            ]);
        },
        add(){
            this.$refs.holidayModal.open = true
        }
    },
};
</script>