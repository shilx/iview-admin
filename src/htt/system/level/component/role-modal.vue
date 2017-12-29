<style lang="less" scoped>
.access-box{
    width: 22%;
    margin-bottom: 25px
}
.role-hr{
    padding-top: 24px;
    border-top: 1px solid #e9eaec;
}
</style>


<template>
    <div>
        <Modal v-model="modalOpen" width="592">
            <p slot="header" style="color:#464C5B;font-size:16px;">
                <span>
                    <template v-if="formData.type == 1">添加</template>
                    <template v-if="formData.type == 0">编辑</template>
                </span>
            </p>
            <div class="level-model">
                <Form :model="formData" :label-width="110">
                    <FormItem label="角色名：">
                        <Input
                            v-model="formData.name"
                            style="width:220px;"></Input>
                    </FormItem>
                    <FormItem label="角色状态：">
                        <RadioGroup v-model="formData.status">
                            <Radio label="0">可用</Radio>
                            <Radio label="1">禁用</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="密码：">
                        <Input
                            v-model="formData.name"
                            style="width:220px;"></Input>
                    </FormItem>
                    <!-- <FormItem prop="access"> -->
                        <CheckboxGroup v-model="formData.access" class="role-hr">
                            <Checkbox class="access-box" label="个人借款审核"></Checkbox>
                            <Checkbox class="access-box" label="开户审核"></Checkbox>
                            <Checkbox class="access-box" label="查看详情"></Checkbox>
                            <Checkbox class="access-box" label="保存日志"></Checkbox>
                            <Checkbox class="access-box" label="产品认证"></Checkbox>
                        </CheckboxGroup>
                    <!-- </FormItem> -->
                </Form>
            </div>
            <div slot="footer">
                <Button @click="cancel" class="wide-btn">取消</Button>
                <Button @click="submit" type="success" class="wide-btn">确定</Button>
            </div>
        </Modal>
        <Modal
            v-model="infoModalOpen"
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
    name: 'user-group-modal',
    props: {
        // formData: {
        //     type: Number, // 0:添加部门;1:添加分组;2设置权限
        //     title: String,
        //     parent: String,
        //     name: String,
        //     nameRdol: Boolean,
        //     rank: String,
        //     access: Array
        // }
        formData: Object
    },
    data (){
        return {
            modalOpen: false,
            infoModalOpen: false,
            title:'',
            position: [
                {
                    name: '',
                    rank: 1
                }
            ],
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
            this.modalOpen = false;
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
