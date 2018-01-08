<style lang="less" scoped>

</style>
<template>
    <Modal
        v-model="open"
        title="添加模板"
        width="592">
        <Form :model="formRight" label-position="right" :label-width="200">
            <FormItem label="消息编码：">
                <Input v-model="formRight.input1" style="width:192px"></Input>
            </FormItem>
            <FormItem label="名称：">
                <Input v-model="formRight.input1" style="width:192px"></Input>
            </FormItem>
            <FormItem label="消息类型：">
                <Select v-model="formRight.rank" style="width:102px;">
                    <Option value="1">弃用</Option>
                    <Option value="2">结束</Option>
                    <Option value="3">即将上线</Option>
                    <Option value="4">已上线</Option>
                </Select>
            </FormItem>
            <FormItem label="消息标题：">
                <Input v-model="formRight.input1" style="width:192px"></Input>
            </FormItem>
            <FormItem label="消息模板：">
                <Input
                    v-model="formRight.desc"
                    type="textarea"
                    style="width:192px"
                    :autosize="{minRows: 3,maxRows: 5}"></Input>
            </FormItem>
        </Form>
        <div slot="footer">
            <modal-footer v-on:onConfirm="open = false" v-on:onCancel="open = false"></modal-footer>
        </div>
    </Modal>
</template>
<script>
import modalFooter from '@/htt/components/modal-footer'
export default {
    components: {
        modalFooter
    },
    data() {
        return{
            open: false,
            formRight:{}
        }
    }
}
</script>
