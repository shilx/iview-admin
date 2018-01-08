<style lang="less" scoped>

</style>
<template>
    <Modal
        v-model="open"
        title="添加banner图片"
        width="592">
        <Form :model="formRight" label-position="right" :label-width="200">
            <FormItem label="链接地址：">
                <Input v-model="formRight.input1" style="width:192px"></Input>
            </FormItem>
            <FormItem label="序号：">
                <Input v-model="formRight.input1" style="width:192px"></Input>
            </FormItem>
            <FormItem label="上传图片：">
                <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <Button type="ghost" icon="ios-cloud-upload-outline">选择要上传的图片</Button>
                </Upload>
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
