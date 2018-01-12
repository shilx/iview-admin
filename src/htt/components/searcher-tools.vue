<style lang="less" scoped>

</style>
<template>
    <!-- <div>
        <Button @click="cancel" class="wide-btn">取消</Button>
        <Button @click="confirm" type="success" class="wide-btn">确定</Button>
    </div> -->
    <!-- <div class="border-b">
        <Form ref="formData" :model="formData" inline :show-message="false" class="sarch-form">
            <Row type="flex" justify="space-between">
                <Col>
                    <FormItem prop="name" label="关键词：">
                        <Input
                            v-model="formData.name"
                            style="width:102px;"></Input>
                    </FormItem>
                    <FormItem>
                        <div slot="label">&nbsp;</div>
                        <Button style="width: 82px; height: 34px" type="primary" @click="handleSearch">查询</Button>
                    </FormItem>
                    <FormItem>
                        <div slot="label">&nbsp;</div>
                        <Button style="width: 82px; height: 34px" @click="handleClear">清空查询</Button>
                    </FormItem>
                </Col>
                <Col class="text-r">
                    <FormItem>
                        <div slot="label">&nbsp;</div>
                        <Button style="width: 82px; height: 34px" type="success" @click="add">添加模板</Button>
                    </FormItem>
                </Col>
            </Row>
        </Form>
    </div> -->
    <div>
        <Form ref="formData" :model="formData" inline :show-message="false" class="sarch-form">
            <Row type="flex" justify="space-between">
                <Col>
                    <FormItem :prop="item.key" :label="item.label" v-for="item in formItem" :key="item.key">
                        <Input
                            v-if="item.type == 'input'"
                            v-model="formData[item.key]"
                            :style="item.style"></Input>
                        <Select
                            v-if="item.type == 'select'"
                            v-model="formData[item.key]"
                            :style="item.style">
                            <Option
                                v-for="o in item.options"
                                :key="o.val"
                                :value="o.val">{{ o.text }}</Option>
                        </Select>
                    </FormItem>
                    <FormItem v-for="item in formButton" :key="item.type">
                        <div slot="label">&nbsp;</div>
                        <Button
                            :type="item.type || 'default'"
                            :style="item.style || 'width: 82px; height: 34px'"
                            @click="handleButton(item.handle)">{{ item.text }}</Button>
                    </FormItem>
                </Col>
                <Col class="text-r">
                    <FormItem v-for="item in toolsButton" :key="item.type">
                        <div slot="label">&nbsp;</div>
                        <Button
                            :type="item.type || 'default'"
                            :style="item.style || 'width: 82px; height: 34px'"
                            @click="handleButton(item.handle)">{{ item.text }}</Button>
                    </FormItem>
                </Col>
            </Row>
        </Form>
    </div>
</template>
<script>
export default {
    props: {
        formItem: {
            type: Array,
            required: true
        },
        formButton: {
            type: Array,
            required: true
        },
        toolsButton: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            formData: {},
            object: {
                firstName: 'John',
                lastName: 'Doe',
                age: 30
            }
        }
    },
    created(){
        console.log(this.formData)
    },
    methods: {
        handleButton(funcName){
            console.log('触发通信', this.formData)
            if(funcName === "clear"){
                // 清空
                this.formData = {}
            }else{
                // 触发通信并携带数据
                this.$emit(funcName, this.formData)
            }
        }
    },
    mounted(){
        
    }
}
</script>
