<style lang="less" scoped>
body{
    background-color: #000;
}
</style>
<template>
    <Modal
        class="display-modal-footer"
        v-model="open"
        title="会员详情"
        width="1112">
        <div class="blacklist-modal">
            <div class="userinfo">
                <Row class="padding-bottom-8">
                    <Col span="12">
                        <label>用户ID：</label>
                        <Input readonly value="1021"></Input>
                    </Col>
                    <Col span="12" class="text-c">
                        <label>用户名：</label>
                        <Input readonly value="zhang"></Input>
                    </Col>
                </Row>
                <Row class="padding-bottom-8">
                    <Col span="12">
                        <label>姓名：</label>
                        <Input readonly value="张三"></Input>
                    </Col>
                    <Col span="12" class="text-c">
                        <label>可用余额：</label>
                        <Input readonly value="可用余额："></Input>
                    </Col>
                </Row>
                <Row class="padding-bottom-8">
                    <Col span="12">
                        <label>证件类型：</label>
                        <Input readonly value="身份证"></Input>
                    </Col>
                    <Col span="12" class="text-c">
                        <label>证件号码：</label>
                        <Input readonly value="36242118829394829"></Input>
                    </Col>
                </Row>
                <Row class="padding-bottom-8">
                    <Col span="12">
                        <label>手机号码：</label>
                        <Input readonly value="15283849293"></Input>
                    </Col>
                    <Col span="12" class="text-c">
                        <label>状态：</label>
                        <Input readonly value="黑牌"></Input>
                    </Col>
                </Row>
                <Row class="padding-bottom-8">
                    <Col span="12">
                        <label>黑牌次数：</label>
                        <Input readonly value="2次"></Input>
                    </Col>
                    <Col span="12" class="text-c">
                        <label>黄牌次数：</label>
                        <Input readonly value="0次"></Input>
                    </Col>
                </Row>
                <Row>
                    <Col span="12" class="text-c">
                        <label>红牌次数：</label>
                        <Input readonly value="0次"></Input>
                    </Col>
                </Row>
            </div>
            <div class="padding-top-16">
                <p class="table-tit">发牌记录</p>
                <Table :columns="histroyCol" :data="histroyData"></Table>
            </div>
        </div>
    </Modal>
</template>
<script>
export default {
    data () {
        return {
            open: false,
            histroyCol: [
                {
                    title: '操作类型',
                    key: 'name'
                },
                {
                    title: '理由',
                    key: 'age'
                },
                {
                    title: '操作时间',
                    key: 'date'
                },
                {
                    title: '操作人',
                    key: 'jieg'
                },
                {
                    title: '工单号',
                    key: 'beiz'
                },
                {
                    title: '操作',
                    render: this.operatR
                }
            ],
            histroyData: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03',
                    jieg: '已审核',
                    beiz: '备注内容'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01',
                    jieg: '已审核',
                    beiz: '备注内容'
                }
            ],
        };
    },
    methods: {
        operatR (h, params) {
            return h('div', [
                h('Button', {
                    props: {
                        type: 'primary',
                        size: 'small'
                    },
                    on: {
                        click: () => {
                            console.log(params);
                            // this.$refs.detailModal.open = true;
                        }
                    }
                }, '撤销发牌')
            ]);
        }
    }
};
</script>
