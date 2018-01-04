<style lang="less" scoped>
    .access-box{
        width: 30%;
    }
</style>


<template>
    <Modal v-model="modalOpen" width="592">
        <p slot="header" style="color:#464C5B;font-size:16px;">
            <span>
                <template v-if="formData.type == 0">添加部门</template>
                <template v-if="formData.type == 1">添加小组</template>
                <template v-if="formData.type == 2">设置权限</template>
            </span>
        </p>
        <div class="level-model">
            <Form :model="formData" :label-width="110">
                <FormItem v-if="formData.type == 1" label="上级部门：">
                    {{formData.parent}}
                </FormItem>
                <FormItem label="部门名称：">
                    <Input
                        v-model="formData.name"
                        :readonly="formData.type == 2"
                        style="width:220px;"></Input>
                </FormItem>
                <FormItem
                    v-if="formData.type !== 0"
                    v-for="(p, index) in position"
                    :key="index"
                    label="职务：">
                    <Input v-model="p.name" style="width:220px;" :key="index"></Input>
                    <Select v-model="p.rank" style="width:102px;" :key="index">
                        <Option value="1">一级</Option>
                        <Option value="2">二级</Option>
                        <Option value="3">三级</Option>
                    </Select>
                    <Button
                        type="ghost"
                        size="small"
                        icon="plus"
                        @click="positionAdd"
                        :key="index"
                        v-if="index == 0"></Button>
                    <Button
                        type="ghost"
                        size="small"
                        icon="minus"
                        @click="positionReduce(index)"
                        :key="index"
                        v-else></Button>
                </FormItem>
                <FormItem label="职务权限" prop="access" v-if="formData.type !== 0">
                    <CheckboxGroup v-model="formData.access">
                        <Checkbox class="access-box" label="个人开户审核"></Checkbox>
                        <Checkbox class="access-box" label="认证审核"></Checkbox>
                        <Checkbox class="access-box" label="个人借款审核"></Checkbox>
                        <Checkbox class="access-box" label="企业开户审核"></Checkbox>
                        <Checkbox class="access-box" label="企业认证审核"></Checkbox>
                        <Checkbox class="access-box" label="企业借款审核"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
            </Form>
        </div>
        <div slot="footer">
            <modal-footer v-on:onConfirm="submit" v-on:onCancel="cancel"></modal-footer>
        </div>
    </Modal>
</template>

<script>
import modalFooter from '@/htt/components/modal-footer'
export default {
    name: 'user-group-modal',
    components: {
        modalFooter
    },
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
