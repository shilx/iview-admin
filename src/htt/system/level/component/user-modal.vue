<style lang="less" scoped>
.access-box{
    width: 22%;
    margin-bottom: 25px
}
</style>


<template>
    <Modal v-model="modalOpen" width="592">
        <p slot="header" style="color:#464C5B;font-size:16px;">
            <span>
                <template v-if="formData.type == 0">添加</template>
                <template v-if="formData.type == 1">编辑</template>
            </span>
        </p>
        <div class="level-model">
            <Form :model="formData" :label-width="110">
                <FormItem label="用户名：">
                    {{formData.parent}}
                </FormItem>
                <FormItem label="姓名：">
                    <Input
                        v-model="formData.name"
                        style="width:220px;"></Input>
                </FormItem>
                <FormItem label="性别：">
                    <RadioGroup v-model="formData.status">
                        <Radio label="0">男</Radio>
                        <Radio label="1">女</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="所属部门：">
                    <Select v-model="formData.rank" style="width:102px;">
                        <Option value="1">一级</Option>
                        <Option value="2">二级</Option>
                        <Option value="3">三级</Option>
                    </Select>
                    <Select v-model="formData.rank" style="width:102px;">
                        <Option value="1">一级</Option>
                        <Option value="2">二级</Option>
                        <Option value="3">三级</Option>
                    </Select>
                    <Select v-model="formData.rank" style="width:102px;">
                        <Option value="1">一级</Option>
                        <Option value="2">二级</Option>
                        <Option value="3">三级</Option>
                    </Select>
                </FormItem>
                <FormItem label="用户状态：">
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
                    <CheckboxGroup v-model="formData.access">
                        <Checkbox class="access-box" label="排班员"></Checkbox>
                        <Checkbox class="access-box" label="审核员"></Checkbox>
                        <Checkbox class="access-box" label="催收员"></Checkbox>
                        <Checkbox class="access-box" label="排查员"></Checkbox>
                        <Checkbox class="access-box" label="股权核实员"></Checkbox>
                    </CheckboxGroup>
                <!-- </FormItem> -->
            </Form>
        </div>
        <div slot="footer">
            <Button @click="cancel" class="wide-btn">取消</Button>
            <Button @click="submit" type="success" class="wide-btn">确定</Button>
        </div>
    </Modal>
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
            title:'',
            position: [
                {
                    name: '',
                    rank: 1
                }
            ]
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
    }
}
</script>
