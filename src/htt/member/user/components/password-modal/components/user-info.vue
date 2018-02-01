<style lang="less" scoped>
    .user-info{
        label{
            width: 80px;
            display: inline-block;
            text-align: right;
        }
        .imglist{
            padding-left: 32px;
            padding-right: 32px;
            padding-top: 48px;
            .img-title{
                font-size: 14px;
                color: #464C5B;
                padding-bottom: 16px;
            }
            img{
                width: 194px;
                height: 118px;
            }
        }
    }
</style>
<template>
    <div class="user-info">
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
                <label>手机号：</label>
                <Input readonly value="手机号："></Input>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <label>身份证号：</label>
                <Input readonly value="身份证号："></Input>
            </Col>
            <Col span="12" class="text-c">
                <label>提交时间：</label>
                <Input readonly value="2018年1月31日 16点27分"></Input>
            </Col>
        </Row>
        <Row type="flex" justify="space-between" class="avatar imglist">
            <Col span="8">
                <p class="img-title">身份证正面照片</p>
                <img src="javasript:;" alt="">
            </Col>
            <Col span="8">
                <p class="img-title">身份证反面照片</p>
                <img src="javasript:;" alt="">
            </Col>
            <Col span="8">
                <p class="img-title">手持身份证照片</p>
                <img src="javasript:;" alt="">
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    data () {
        return {};
    },
    methods: {
    }
};
</script>
