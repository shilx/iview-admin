<style lang="less" scoped>

</style>


<template>
    <Modal v-model="newGroupModal" width="592">
        <p slot="header" style="color:#464C5B;font-size:16px;">
            <span>{{formData.title}}</span>
        </p>
        <div class="level-model">
            <Form :model="formData" :label-width="140">
                <FormItem v-if="formData.parent" label="所属部门：">
                    {{formData.parent}}
                </FormItem>
                <FormItem label="下级部门名称：">
                    <Input v-model="formData.name" style="width:220px;"></Input>
                </FormItem>
                <FormItem label="职务：">
                    <template v-for="(p, index) in position">
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
                    </template>
                </FormItem>
            </Form>
        </div>
        <div slot="footer">
            <Button @click="cancel">取消</Button>
            <Button type="success">确定</Button>
        </div>
    </Modal>
</template>

<script>
export default {
    name: 'user-group-modal',
    props: {
        formData: {
            title: String,
            name: String,
            nameRdol: Boolean,
            // position: String,
            rank: String,
            checkbox: Array,
        }
    },
    data (){
        return {
            newGroupModal: false,
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
    methods: {
        cancel() {
            this.newGroupModal = false;
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
