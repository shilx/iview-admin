<style lang="less" scoped>
    .pdlr8{
        padding-left: 8px;
        padding-right: 8px;
    }
</style>
<template>
    <Modal
        v-model="open"
        title="添加假期"
        width="1112">
        <div>
            <Row type="flex" justify="space-between">
                <Col>
                    <Select style="width: 112px" v-model="years">
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                    </Select>
                    <span class="pdlr8">年</span>
                    <Select style="width: 112px" v-model="month">
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                    </Select>
                    <span class="pdlr8">月</span>
                </Col>
                <Col class="text-r">
                    <Button style="width: 82px; height: 34px" type="primary" @click="add">添加</Button>
                </Col>
            </Row>
            <div class="padding-top-9">
                <Table border :columns="columns5" :data="data5"></Table>
            </div>
        </div>
        <div slot="footer">
            <modal-footer v-on:onConfirm="open = false" v-on:onCancel="open = false"></modal-footer>
        </div>
    </Modal>
</template>
<script>
import modalFooter from '@/htt/components/modal-footer'
export default {
    components: {
        modalFooter
    },
    data() {
        return{
            open: false,
            years:'',
            month:'',
            columns5: [
                {
                    title: '年月',
                    key: 'date',
                    width:116,
                    sortable: true
                },
                {
                    title: '日',
                    key: 'age',
                    width:116,
                    sortable: true
                },
                {
                    title: '备注',
                    key: 'name'
                },
                {
                    title: '操作',
                    key: 'address',
                    width:116,
                    render: this.operatR
                }
            ],
            data5: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ]
        }
    },
    methods: {
        operatR(h, params) {
            return h('div', [
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

        }
    }
}
</script>
