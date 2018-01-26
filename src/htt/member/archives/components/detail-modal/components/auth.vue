<style lang="less" scoped>
    .auth{
        &-tab-cont{
            padding: 24px 36px;
            .ivu-tabs-tabpane{
                padding-top: 16px;
                padding-bottom: 16px;
                label{
                    width: 80px;
                    display: inline-block;
                    text-align: right;
                }
            }
        }
    }
</style>

<template>
    <div class="auth">
        <Tabs
            type="card"
            :animated="false"
            v-model="tabsModuleName">
            <TabPane
                label="认证展示模块"
                name="authShow"></TabPane>
            <TabPane
                label="非展示模块"
                name="notShow"></TabPane>
        </Tabs>
        <div class="auth-tab-cont tabs-content-border">
            <div
                v-if="tabsModuleName == 'authShow'">
                <Tabs :animated="false">
                    <TabPane label="个人信息">
                        <Row class="padding-bottom-8">
                            <Col span="12">
                                <label>姓名：</label>
                                <Input readonly value="张三"></Input>    
                            </Col>
                            <Col span="12">
                                <label>身份证号码：</label>
                                <Input readonly value="3726253727383749"></Input>    
                            </Col>
                        </Row>
                        <Row class="padding-bottom-8">
                            <Col span="12">
                                <label>婚姻状况：</label>
                                <Input readonly value="已婚"></Input>    
                            </Col>
                            <Col span="12">
                                <label>居住地址：</label>
                                <Input readonly value="杭州市上城区江城路1号"></Input>    
                            </Col>
                        </Row>
                        <Row class="padding-bottom-8">
                            <Col span="12">
                                <label>联系人姓名：</label>
                                <Input readonly value="张老三"></Input>    
                            </Col>
                            <Col span="12">
                                <label>与本人关系：</label>
                                <Input readonly value="父亲"></Input>    
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12">
                                <label>性别：</label>
                                <Input readonly value="男"></Input>    
                            </Col>
                            <Col span="12">
                                <label>联系电话：</label>
                                <Input readonly value="15637263827"></Input>    
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane label="职业认证">职业认证的内容</TabPane>
                    <TabPane label="收入认证">收入认证的内容</TabPane>
                    <TabPane label="个人信息拓展">个人信息拓展的内容</TabPane>
                    <TabPane label="收入拓展">收入拓展的内容</TabPane>
                </Tabs>
                <Tabs :animated="false">
                    <TabPane label="结婚证">结婚证的内容</TabPane>
                    <TabPane label="身份证+手持身份证">身份证+手持身份证的内容</TabPane>
                </Tabs>
            </div>
            <div v-else>
                非展示模块
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'auth',
    data () {
        return {
            tabsModuleName: 'authShow'
        };
    }
};
</script>