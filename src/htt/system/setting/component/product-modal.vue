<style lang="less" scoped>
.ivu-form-item{
    margin-bottom: 8px;
}
</style>

<template>
    <div>
        <Modal v-model="addModal" width="670">
            <p slot="header" style="color:#464C5B;font-size:16px;">添加产品</p>
            <div class="level-model">
                <Form :model="formData" :label-width="140">
                    <FormItem label="产品类型：">
                        <Select v-model="formData.rank" style="width:102px;">
                            <Option value="1">化建群英贷1</Option>
                            <Option value="2">化建群英贷2</Option>
                            <Option value="3">化建群英贷3</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="产品名称：">
                        <Input
                            v-model="formData.name"
                            style="width:220px;"></Input>
                    </FormItem>
                    <FormItem label="是否需要认证：">
                        <RadioGroup v-model="formData.status">
                            <Radio label="0">是</Radio>
                            <Radio label="1">否</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="是否默认系统标题：">
                        <RadioGroup v-model="formData.status">
                            <Radio label="0">是</Radio>
                            <Radio label="1">否</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="借款标题：">
                        <Input
                            v-model="formData.name"
                            style="width:220px;"></Input>
                    </FormItem>
                    <FormItem label="借款金额范围(元)：">
                        <Input
                            v-model="formData.name"
                            style="width:120px;margin-right:8px"></Input>——<Input
                            v-model="formData.name"
                            style="width:120px;margin-left:8px;"></Input>
                    </FormItem>
                    <FormItem label="借款金额范围(元)：">
                            <CheckboxGroup v-model="formData.access" class="">
                            <Checkbox class="" label="月"></Checkbox>
                            <Checkbox class="" label="日"></Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="借款金额范围（元）：">
                        <CheckboxGroup v-model="formData.access" class="">
                            <Checkbox class="" label="一口价"></Checkbox>
                            <Checkbox class="" label="竞价"></Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="还款方式：">
                        <CheckboxGroup v-model="formData.access" class="">
                            <Checkbox class="" label="等额本息"></Checkbox>
                            <Checkbox class="" label="每月付息到期还本"></Checkbox>
                            <Checkbox class="" label="到期一次性还本付息"></Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="年化利率（%）：">
                        <Input
                            v-model="formData.name"
                            style="width:120px;margin-right:8px"></Input>——<Input
                            v-model="formData.name"
                            style="width:120px;margin-left:8px;"></Input>
                    </FormItem>
                    <FormItem label="担保方式：">
                        <CheckboxGroup v-model="formData.access" class="">
                            <Checkbox class="" label="信用"></Checkbox>
                            <Checkbox class="" label="质押"></Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="截止日范围：">                    
                        <DatePicker
                            type="daterange"
                            format="yyyy/MM/dd"
                            :transfer="true"
                            style="width: 245px">
                        </DatePicker>
                    </FormItem>
                    <FormItem label="上线时间：">                    
                        <DatePicker
                            type="datetime"
                            format="yyyy-MM-dd HH:mm"
                            :transfer="true"
                            placement="top-start"
                            style="width: 160px">
                        </DatePicker>
                    </FormItem>
                    <FormItem label="下线时间：">                    
                        <DatePicker
                            type="datetime"
                            format="yyyy-MM-dd HH:mm"
                            :transfer="true"
                            placement="top-start"
                            style="width: 160px">
                        </DatePicker>
                    </FormItem>
                    <FormItem label="排序：">
                        <Input
                            v-model="formData.name"
                            style="width:220px;"></Input>
                    </FormItem>
                </Form>
            </div>
            <div slot="footer">
                <Button @click="cancel" class="wide-btn">取消</Button>
                <Button @click="submit" type="success" class="wide-btn">确定</Button>
            </div>
        </Modal>
        <Modal
            v-model="changeModal"
            title="改变状态"
            width="592">
            <div style="text-align:center">
                状态：<Select v-model="formData.rank" style="width:102px;">
                    <Option value="1">弃用</Option>
                    <Option value="2">结束</Option>
                    <Option value="3">即将上线</Option>
                    <Option value="4">已上线</Option>
                </Select>
            </div>
        </Modal>
        <Modal
            v-model="typeModal"
            title="角色详情"
            width="592">
            <Table stripe :columns="accountCol" :data="accountList"></Table>
            <div slot="footer">
                <Button @click="closeInfo">关闭</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
export default {
    name: 'product-modal',
    data (){
        return {
            addModal: false,
            typeModal: false,
            changeModal: false,
            title:'',
            formData: {
                rank:1,
                access: ['个人借款审核']
            },
            accountCol: [
                    {
                        title: '姓名',
                        key: 'userId',
                        // width: 80,
                    },
                    {
                        title: '部门',
                        key: 'nickname',
                        // width: 160
                    },
                    {
                        title: '职务',
                        key: 'cellphone',
                        // width: 160
                    },
                    {
                        title: '用户状态',
                        key: 'idNumber',
                        // width: 200
                    }
                ],
                accountList: [{
                    userId: '1',
                    nickname: '1',
                    cellphone: '1',
                    idNumber: '1',
                }],
            // position: [
            //     '个人开户审核',
            //     '认证审核',
            //     '个人借款审核',
            //     '企业开户审核',
            //     '企业认证审核',
            //     '企业借款审核'
            // ]
        }
    },
    created() {
        
    },
    methods: {
        cancel() {
            this.addModal = false;
        },
        submit() {
            //储存时注意父子组件传参
        },
        positionAdd() {
            this.position.push({
                name: '',
                rank: 1
            })
        },
        positionReduce(index) {
            this.position.splice(index, 1)
        },
        closeInfo() {
            this.infoModalOpen = false
        }
    }
}
</script>
