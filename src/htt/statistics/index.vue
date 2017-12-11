<style lang="less">
.statistics{
    .count{
        padding-top: 10px;
        padding-bottom: 18px;
        text-align: center;
        display: flex;
        justify-content: flex-start;
        .flex-mid{
            width: 240px;
            background-color: white;
            display: flex;
            overflow: hidden;
            border-radius: 4px;
            margin-left: 16px;
            +.flex-mid{
                margin-left: 24px;
            }
            .icon{
                width: 92px;
                height: 100px;
                background-color: #6CCAC9;
            }
            .text{
                align-self: center;
                flex: 1;
                color: #999;
                .big{
                    font-size: 24px;
                    color: #333;
                }
            }
        }  
    }
    .chart{
        width: 500px;    
        display: inline-block;
        +.chart{
            padding-left: 32px;
        }
        .left{
            .tit{
                font-size:14px;
                color:rgba(70,76,91,1);
                padding-bottom: 16px;
            }
            label{
                font-size: 12px;
                padding-right: 8px;
            }
        }
        .right{

        }
        .bottom{
            padding-top: 16px;
        }
    }
    .total{
        
    }
    .item{
        margin-top: 8px;
    }
}
</style>

<template>
    <div class="statistics">
        <div class="count">
            <router-link to="#" tag="div" class="flex-mid">
                <div class="icon"></div>
                <div class="text">
                    <p class="big">100</p>
                    <p>今日总操作次数</p>
                </div>
            </router-link>
            <router-link to="#" tag="div" class="flex-mid">
                <div class="icon"></div>
                <div class="text">
                    <p class="big">100</p>
                    <p>重置登录密码</p>
                    <p>（今日功能冠军）</p>
                    </div>
            </router-link>
            <router-link to="#" tag="div" class="flex-mid">
                <div class="icon"></div>
                <div class="text">
                    <p class="big">100</p>
                    <p>张三</p>
                    <p>（今日客服操作冠军）</p>
                </div>
            </router-link>
            <router-link to="#" tag="div" class="flex-mid">
                <div class="icon"></div>
                <div class="text">
                    <p class="big">100</p>
                    <p>今日总操作次数</p>
                </div>
            </router-link>
        </div>
        <Form>
            <Card :dis-hover="true" class="total">
                <div class="chart">
                    <Row>
                        <Col span="12" class="left">
                            <p class="tit">业务操作总次数</p>
                            <div>
                                <label>统计类型：</label>
                                <Select v-model="formItem.select" style="width:96px;">
                                    <Option value="beijing">北京</Option>
                                    <Option value="shanghai">上海</Option>
                                    <Option value="shenzhen">深圳</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col span="12" class="right"></Col>
                        <Col span="24" class="bottom">
                            <totalChart></totalChart>
                        </Col>
                    </Row>
                </div>
            </Card>
            <Card :dis-hover="true" class="item">
                <div class="chart">
                    <Row>
                        <Col span="12" class="left">
                            <p class="tit">业务操作次数</p>
                            <div>
                                <label>时间：</label>
                                <Select v-model="formItem.select" style="width:96px;">
                                    <Option value="beijing">北京</Option>
                                    <Option value="shanghai">上海</Option>
                                    <Option value="shenzhen">深圳</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col span="12" class="right"></Col>
                        <Col span="24" class="bottom">
                            <totalChart1></totalChart1>
                        </Col>
                    </Row>
                </div>
                <div class="chart">
                    <Row>
                        <Col span="12" class="left">
                            <p class="tit">重置登录密码操作次数</p>
                        </Col>
                        <Col span="12" class="right"></Col>
                        <Col span="24" class="bottom">
                            <totalChart2></totalChart2>
                        </Col>
                    </Row>
                </div>
            </Card>
        </Form>
        <Card :dis-hover="true">
            <Form ref="accountForm" :model="accountForm" inline :show-message="false">
                <FormItem prop="userId"  label="姓名">
                    <Input style="width: 86px;" type="text" v-model="accountForm.userId"></Input>
                </FormItem>
                <FormItem prop="name"  label="用户名">
                    <Input style="width: 110px;" type="text" v-model="accountForm.name"></Input>
                </FormItem>
                <FormItem prop="operatorName" label="操作类型">
                    <Select style="width: 126px" v-model="accountForm.operatorName">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
                <FormItem label="123">
                    <Button style="width: 82px; height: 34px" type="primary" @click="handleSubmit('accountForm')" >搜索</Button>
                </FormItem>
            </Form>
            <Table stripe :columns="accountCol" :data="accountList"></Table>
        </Card>
    </div>
</template>

<script>
import totalChart from './components/totalChart.vue';
import totalChart1 from './components/totalChart.1.vue';
import totalChart2 from './components/totalChart.2.vue';
export default {
    name: 'statistics',
    components: {
        totalChart,
        totalChart1,
        totalChart2
    },
    data () {
        return {
            formItem: {
                select: 'beijing'
            },
            accountForm: {
                userId: '',
                name: '',
                idNumber: '',
                operatorName: ''
            },
            accountCol: [
                {
                    title: '姓名',
                    key: 'name',
                },
                {
                    title: '重置支付密码',
                    key: 'resetpaypw',
                },
                {
                    title: '重置登录密码',
                    key: 'resetloginpw',
                },
                {
                    title: '重置密保问题',
                    key: 'resetq',
                },
                {
                    title: '重传身份证',
                    key: 'resfz',
                },
                {
                    title: '重传手持身份证',
                    key: 'rehandfz',
                },
                {
                    title: '重置手机',
                    key: 'rephone',
                },
                {
                    title: '登录解锁',
                    key: 'loginunlock',
                },
                {
                    title: '支付解锁',
                    key: 'payun',
                },
                {
                    title: '找回支付密码',
                    key: 'findpw',
                },
                {
                    title: '总次数',
                    key: 'total',
                }
            ],
            accountList: [],
        };
    },
    computed: {
        
    },
    methods: {
        handleSubmit() {

        }
    }
};
</script>

<style>

</style>
