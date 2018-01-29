<style lang="less" scoped>
.detail-modal{
    .info{
        padding-top: 8px;
        .text-r{
            text-align: right;
        }
        .text-c{
            text-align: center;
        }
        label{
            width: 100px;
            text-align: right;
            margin-right: 8px;
            display: inline-block;
        }
    }
    .items{
        padding-top: 32px;
        &-nav{
            padding-bottom: 16px;
            width: 100%;
            text-align: center;
        }
    }
}
</style>
<template>
    <Modal
        class="detail-modal display-modal-footer"
        v-model="open"
        title="会员详情"
        width="1112">
        <div class="info">
            <Row class="padding-bottom-8">
                <Col span="8">
                    <label>用户名（姓名）：</label>
                    <Input readonly value="1"></Input>
                </Col>
                <Col span="8" class="text-c">
                    <label>性别：</label>
                    <Input readonly value="1"></Input>
                </Col>
                <Col span="8" class="text-r">
                    <label>手机号码：</label>
                    <Input readonly value="1"></Input>
                </Col>
            </Row>
            <Row>
                <Col span="8">
                    <label>状态：</label>
                    <Input readonly value="1"></Input>
                </Col>
                <Col span="8" class="text-c">
                    <label>账户可用余额：</label>
                    <Input readonly value="1"></Input>
                </Col>
                <Col span="8" class="text-r">
                    <label>账户冻结资金：</label>
                    <Input readonly value="1"></Input>
                </Col>
            </Row>
        </div>
        <div class="items">
            <RadioGroup v-model="currentView" type="button" class="items-nav" @on-change="changeNav">
                <Radio label="baseinfo">个人基本信息</Radio>
                <Radio label="auth">资格认证</Radio>
                <Radio label="2">第三方排查</Radio>
                <Radio label="3">借款相关</Radio>
                <Radio label="4">投资相关</Radio>
                <Radio label="5">账户资金</Radio>
                <Radio label="6">工作日志</Radio>
                <Radio label="7">操作记录</Radio>
                <Radio label="8">短信记录</Radio>
            </RadioGroup>
            <keep-alive>
                <component v-bind:is="currentView">
                    <!-- 组件在 vm.currentview 变化时改变！ -->
                </component>
            </keep-alive>
            <p class="padding-16">已认证通过产品：随心贷、桃金贷</p>
            <Card class="content history"  :dis-hover="true">
                <p class="tit">审核历史记录</p>
                <Table :columns="histroyCol" :data="histroyData"></Table>
            </Card>
        </div>
    </Modal>
</template>
<script>
import baseinfo from './components/baseinfo';
import auth from './components/auth';
export default {
    components: {
        baseinfo,
        auth
    },
    data () {
        return {
            open: false,
            currentView: 'baseinfo',
            creditCard: [
                {
                    num: 6238478787876667777,
                    name: '中国建设银行行长吴山支行',
                    isDefault: true
                }, {
                    num: 6238478787876667777,
                    name: '中国银行庆春支行',
                    isDefault: false
                }
            ],
            histroyCol: [
                {
                    title: '提交时间',
                    key: 'name'
                },
                {
                    title: '审核员',
                    key: 'age'
                },
                {
                    title: '审核时间',
                    key: 'date'
                },
                {
                    title: '审核结果',
                    key: 'jieg'
                },
                {
                    title: '审核备注',
                    key: 'beiz'
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
            ]
        };
    },
    methods: {
        changeNav (val) {
            this.currentView = val;
            // console.log(val);
        }
    }
};
</script>
