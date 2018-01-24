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
        .pdb8{
            padding-bottom: 8px;
        }
    }
    .items{
        padding-top: 32px;
        &-nav{
            padding-bottom: 16px;
        }
    }
}
</style>
<template>
    <Modal
        class="detail-modal"
        v-model="open"
        title="会员详情"
        width="1112">
        <div class="info">
            <Row type="flex" class="pdb8">
                <Col span="8">
                    <label>用户名（姓名）：</label>
                    <Input disabled value="1" :style="inputStyle"></Input>
                </Col>
                <Col span="8" class="text-c">
                    <label>性别：</label>
                    <Input disabled value="1" :style="inputStyle"></Input>
                </Col>
                <Col span="8" class="text-r">
                    <label>手机号码：</label>
                    <Input disabled value="1" :style="inputStyle"></Input>
                </Col>
            </Row>
            <Row type="flex">
                <Col span="8">
                    <label>状态：</label>
                    <Input disabled value="1" :style="inputStyle"></Input>
                </Col>
                <Col span="8" class="text-c">
                    <label>账户可用余额：</label>
                    <Input disabled value="1" :style="inputStyle"></Input>
                </Col>
                <Col span="8" class="text-r">
                    <label>账户冻结资金：</label>
                    <Input disabled value="1" :style="inputStyle"></Input>
                </Col>
            </Row>
        </div>
        <div class="items">
            <RadioGroup v-model="itemsNav" type="button" class="items-nav" @on-change="changeNav">
                <Radio label="0">个人基本信息</Radio>
                <Radio label="1">资格认证</Radio>
                <Radio label="2">第三方排查</Radio>
                <Radio label="3">借款相关</Radio>
                <Radio label="4">投资相关</Radio>
                <Radio label="5">账户资金</Radio>
                <Radio label="6">工作日志</Radio>
                <Radio label="7">操作记录</Radio>
                <Radio label="8">短信记录</Radio>
            </RadioGroup>
            <baseinfo></baseinfo>
        </div>
    </Modal>
</template>
<script>
import baseinfo from './components/baseinfo'
export default {
    components: {
        baseinfo
    },
    data() {
        return{
            open: false,
            inputStyle: 'width:192px;',
            itemsNav: 0,
            creditCard: [
                {
                    num: 6238478787876667777,
                    name: "中国建设银行行长吴山支行",
                    isDefault: true
                },{
                    num: 6238478787876667777,
                    name: "中国银行庆春支行",
                    isDefault: false
                }
            ]
        }
    },
    methods: {
        changeNav(val) {
            console.log(val)
        }
    },
}
</script>
