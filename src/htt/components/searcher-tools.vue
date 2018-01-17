<style lang="less" scoped>
    @import '../../styles/common.less';
    .has-bd{
        padding: 16px;
        border-bottom: 1px solid #DDDEE1;
    }
    .no-bd{
        padding-right: 16px;
        padding-top: 16px;
    }
</style>

<template>
    <div>
        <!-- 有搜索表单则显示底部边框 -->
        <div class="has-bd" v-if="formItems instanceof Object">
            <Form
                ref="seacherForm"
                :model="formData"
                :rules="ruleValidate"
                inline
                :show-message="false">
                <Row type="flex" justify="space-between">
                    <Col>
                        <FormItem
                            :prop="item.key"
                            :label="`${item.label}：`"
                            v-for="item in formItems"
                            :key="item.key">

                            <!-- Input -->
                            <Input
                                v-if="item.type == 'input'"
                                v-model="formData[item.key]"
                                :style="item.style || 'width: 102px'">
                            </Input>

                            <!-- Select -->
                            <Select
                                v-if="item.type == 'select'"
                                v-model="formData[item.key]"
                                :style="item.style">
                                <Option
                                    v-for="element in item.list"
                                    :key="element.val"
                                    :value="element.val">{{ element.text }}</Option>
                            </Select>

                            <!-- RadioGroup -->
                            <RadioGroup
                                v-if="item.type == 'radio'"
                                v-model="formData[item.key]"
                                :style="item.style">
                                <Radio
                                    v-for="text in item.list"
                                    :key="text"
                                    :label="text">
                                    </Radio>
                            </RadioGroup>
                            
                            <!-- CheckboxGroup -->
                            <CheckboxGroup
                                v-if="item.type == 'checkbox'"
                                v-model="formData[item.key]"
                                :style="item.style">
                                <Checkbox 
                                    v-for="text in item.list"
                                    :key="text"
                                    :label="text">
                                    </Checkbox>
                            </CheckboxGroup>

                            <!-- DatePicker -->
                            <DatePicker
                                v-if="item.type == 'datePick'"
                                :type="item.range ? 'daterange' : 'date'"
                                v-model="formData[item.key]"
                                :style="item.style">
                            </DatePicker>

                            <!-- TimePicker -->
                            <TimePicker
                                v-if="item.type == 'timePicker'"
                                :type="item.range ? 'timerange' : 'time'"
                                v-model="formData[item.key]"
                                :style="item.style">
                                </TimePicker>
                        </FormItem>
                        <!-- 表单按钮 -->
                        <FormItem v-for="item in formButton" :key="item.type">
                            <div slot="label">&nbsp;</div>
                            <Button
                                :type="item.type || 'default'"
                                :style="item.style || 'width: 82px; height: 34px'"
                                @click="handleButton(item.handle)">{{ item.text }}</Button>
                        </FormItem>
                    </Col>
                    <Col class="text-r">
                        <!-- 功能按钮 -->
                        <FormItem v-for="item in toolsButton" :key="item.text">
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
        <!-- 无搜索则只有右侧功能按钮 -->
        <div
            v-else
            class="no-bd text-right">
            <Button
                v-for="item in toolsButton"
                :key="item.text"
                :type="item.type || 'default'"
                :style="item.style || 'width: 82px; height: 34px'"
                @click="handleButton(item.handle)">{{ item.text }}</Button>
        </div>
    </div>
</template>
<script>
const formItems = [{
        type: "input",
        key: "name",// 字段名
        label: "关键词",// 描述
        style: "width:102px;",// label宽
        value: ""// 默认值
    },{
        type: "select",
        list: [// 选项列表
            {
                val: 1,
                text: "北京"
            },{
                val: 2,
                text: "上海"
            }
        ],
        key: "select",
        label: "模板对应产品标示：",
        style: "width:102px;",
        value: ""
    },{
        type: "radio",
        list: [// 选项列表
            "北京",
            "上海",
        ],
        key: "radio",
        label: "模板对应产品标示：",
        style: "width:102px;",
        value: ""
    },{
        type: "checkbox",
        list: [// 选项列表
            "北京",
            "上海",
        ],
        key: "checkbox",
        label: "模板对应产品标示：",
        style: "width:102px;",
        value: ""
    },{
        type: "datePick",
        range: Boolean,// 是否选择范围 true ? daterange : date
        key: "date",// 字段名
        label: "日期",// 描述
        style: "width:102px;",
        value: ""
    },{
        type: "timePicker",
        range: Boolean,
        key: "time",// 字段名
        label: "时间",// 描述
        style: "width:102px;",
        value: ""
    },
]
export default {
    props: {
        formItems: {// 表单字段
            type: Array,
            required: false
        },
        formButton: {// 表单按钮
            type: Array,
            required: false
        },
        ruleValidate: {// 验证规则
            type: Object,
            required: false
        },
        toolsButton: {// 右侧按钮
            type: Array,
            required: false
        },
    },
    data() {
        return {
            formData: {},
        }
    },
    created(){
        console.log(this.formItems instanceof Object)
    },
    methods: {
        handleButton(funcName){
            if(funcName === "reset"){
                // 重置表单
                this.$refs['seacherForm'].resetFields();
            }else if(funcName === "submit"){
                this.$refs['seacherForm'].validate((valid) => {
                    if (valid) {
                        // 触发通信并携带数据
                        console.log('触发通信', this.formData)
                        this.$emit(funcName, this.formData)
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }else{
                this.$emit(funcName)
            }
        },
    },
    mounted(){
        
    }
}
</script>
