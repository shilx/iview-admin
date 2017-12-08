<style lang="less" scoped>
    .ivu-form-item{
        margin-bottom: 8px;
    }
    .text{
        margin-top: 24px;
        margin-bottom: 16px;
    }
    .id-card{
        img{
            width: 194px;
            height: 118px;
            background-color: #D8D8D8;
            border: 1px solid #979797;
            display: inline-block;
            +img{
                margin-left: 14px;
            }
        }
    }
</style>

<template>
    <div class="content">
        <Form :model="userInfo" :label-width="80">
            <Row type="flex" :gutter="16">
                <Col span="6">
                    <FormItem label="会员ID：">
                        <Input disabled v-model="userInfo.input" placeholder="Enter something..."></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="用户名：">
                        <Input disabled v-model="userInfo.input" placeholder="Enter something..."></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="姓名：">
                        <Input disabled v-model="userInfo.input" placeholder="Enter something..."></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="性别:">
                        <Input disabled v-model="userInfo.input" placeholder="Enter something..."></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row type="flex" :gutter="16">
                <Col span="6">
                    <FormItem label="手机：">
                        <Input disabled v-model="userInfo.input" placeholder="Enter something..."></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="身份证号：">
                        <Input disabled v-model="userInfo.input" placeholder="Enter something..."></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="出生年月：">
                        <Input disabled v-model="userInfo.input" placeholder="Enter something..."></Input>
                    </FormItem>
                </Col>
                <Col span="6">
                </Col>
            </Row>
            <div class="id-card">
                <div class="text">身份证正反面照片（<span class="origin">重传</span>）</div>
                <img src="" alt="">
                <img src="" alt="">
            </div>
            <div class="validity">
                <div class="text">身份证有效期</div>
                <DatePicker type="daterange" format="yyyy/MM/dd" placeholder="Select date and time" :transfer="true" style="width: 245px"></DatePicker>
            </div>
        </Form>
    </div>
</template>

<script>
export default {
    name:'real-name',
    props: {
        record: Object
    },
    data () {
        return {
            userInfo:{
                input: 1
            }
        }
    },
    created(){
        
    },
    computed: {
        
    },
    methods: {
       getUserInfo() {
           const send = {
                userId: this.record.userId
            }
            console.log(send)
            this.$store.dispatch('getUserInfo', send).then((res) => {
                console.log(res)
            }).catch(error => {
                this.tableLoading = false
                this.$Message.error('请求失败')
            })
       },
    }
};
</script>
