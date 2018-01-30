<style lang="less" scoped>
.ivu-form{
    &-item{
        margin-bottom: 16px;
        &:last-child{
            margin-bottom: 0;
        }
        &-label{
            padding-left: 0;
        }
    }
}
</style>
<template>
    <Modal
        v-model="open"
        title="发牌"
        width="780">
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
            </div>
             <Form :model="formItem" :label-width="80" class="padding-top-16">
                <FormItem label="发牌类型：">
                    <Select v-model="formItem.select" style="width:192px;">
                        <Option value="0">黄牌</Option>
                        <Option value="1">红牌</Option>
                        <Option value="2">黑牌</Option>
                    </Select>
                </FormItem>
                <FormItem label="发牌理由：">
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                </FormItem>
            </Form>
        </div>
    </Modal>
</template>
<script>
export default {
    data () {
        return {
            open: false,
            formItem: {
                input: '',
                select: '0'
            }
        };
    },
    methods: {
    }
};
</script>
