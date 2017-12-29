<style lang="less" scoped>
    
</style>

<template>
    <div>
        <Card shadow>
            <Form :model="form" :label-width="100">
                <FormItem label="原密码：">
                    <Input
                        type="password"
                        style="width:192px"
                        v-model="form.input1"></Input>
                </FormItem>
                <FormItem label="新密码：">
                    <Input
                        type="password"
                        style="width:192px"
                        v-model="form.input2"></Input>
                </FormItem>
                <FormItem label="确认密码：">
                    <Input
                        type="password"
                        style="width:192px"
                        v-model="form.input3"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
                    <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                input1: '',
                input2: '',
                input3: ''
            },
        }
    },
    methods: {
        
    }
}
</script>
