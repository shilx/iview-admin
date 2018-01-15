<style lang="less" scoped>

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
        <msg-modal ref="msgModal"></msg-modal>
    </div>
</template>

<script>
import searcherTools from '@/htt/components/searcher-tools';
import msgModal from './components/msg-modal.vue';
export default {
    name: '',
    components: {
        msgModal
    },
    data () {
        return {
            formData: {

            },
            accountCol: [
                {
                    title: '消息编码',
                    key: 'resfz',
                },
                {
                    title: '消息名称',
                    key: 'rehandfz',
                },
                {
                    title: '消息类型',
                    key: 'rephone',
                },
                {
                    title: '消息标题',
                    key: 'loginunlock',
                },
                {
                    title: '备注',
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
            this.$refs.msgModal.open = true
        }
    },
};
</script>