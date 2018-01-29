<style lang="less" scoped>
.baseinfo{
    display: flex;
    padding-top: 42px;
    padding-bottom: 42px;
    &-left{
        width: 140px;
        padding-left: 36px;
        flex: initial;
    }
    &-right{
        flex:1;
        line-height: 40px;
        color: #464C5B;
        font-size: 12px;
        label{
            width: 110px;
            text-align: right;
            display: inline-block;
            &+span{
                padding-left: 8px;
            }
        }
        span+span,
        a{
            padding-left: 16px;
        }
        a{
            user-select: none;
        }
        .default-card{
            color: #ED4016;
        }
    }
}
</style>
<template>
    <Card :padding="0" :dis-hover="true">
        <div class="baseinfo">
            <div class="baseinfo-left">
                <div class="avatar">
                    <img src="javascritp:viod(0);" alt="">
                </div>
            </div>
            <Row type="flex" class="baseinfo-right">
                <Col span="8">
                    <label>账号性质：</label>
                    <span>中财员工</span>
                    <a>（切换）</a>
                </Col>
                <Col span="8">
                    <label>入股贷资格：</label>
                    <span>是</span>
                    <a>（切换）</a>
                </Col>
                <Col span="8">
                    <label>股权贷资格：</label>
                    <span>是</span>
                    <a>（切换）</a>
                </Col>
                <Col span="8">
                    <label>注册时间：</label>
                    <span>2017-11-12 14:25:43</span>
                </Col>
                <Col span="8">
                    <label>开户状态：</label>
                    <span>已通过</span>
                    <a>查看审核记录</a>
                </Col>
                <Col span="8">
                    <label>开通借款功能：</label>
                    <span>已通过</span>
                    <a>查看审核记录</a>
                </Col>
                <Col span="8">
                    <label>重传身份证状态：</label>
                    <span>已通过</span>
                    <a>查看审核记录</a>
                </Col>
                <Col span="8">
                    <label>重传手持证件状态：</label>
                    <span>已通过</span>
                    <a>查看审核记录</a>
                </Col>
                <Col span="24"><label>
                    已开通产品认证：</label><span>
                    将帅贷、随心贷、股权贷、乐拍</span>
                </Col>
                <!-- 银行卡列表start -->
                <Col
                    span="24"
                    v-for="(item,index) in creditCard"
                    :key="index">
                        <label>{{ index == 0 ? "银行卡信息：" : "" }}</label>
                        <span>{{ item.num }}</span>
                        <span>{{ item.name }}</span>
                        <span 
                            v-if="item.isDefault"
                            class="default-card"
                            >（默认）</span>
                </Col>
                <!-- 银行卡列表end -->
                <Col span="24">
                    <label>法律文书送达地址：</label>
                    <span>杭州市江干区庆春路1号</span>
                </Col>
            </Row>
        </div>
    </Card>
</template>
<script>
export default {
    components: {

    },
    data () {
        return {
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
            ]
        };
    },
    methods: {

    }
};
</script>
