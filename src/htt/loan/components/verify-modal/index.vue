<style lang="less" scoped>

</style>

<template>
    <div>
        <Modal
            title="审核"
            :width="1112"
            v-model="isOpen"
            class-name="verify-modal">
            <Tabs type="card" :animated="false">
                <TabPane v-for="com in comList" :key="com.tabName" :label="com.tabName">
                    <component :ref="com.comName" :is="com.comName" :record="record"></component>
                </TabPane>
                <TabPane label="工作日志记录" class="content">
                    <p class="tit">工作历史记录</p>
                    <Table :columns="histroyCol" :data="histroyData"></Table>
                </TabPane>
            </Tabs>
            <Form :model="verifyForm">
                <Card class="content history">
                    <p class="tit">审核历史记录</p>
                    <Table :columns="histroyCol" :data="histroyData"></Table>
                    <RadioGroup v-model="verifyForm.status">
                        <Radio label="正常"></Radio>
                        <Radio label="异常"></Radio>
                    </RadioGroup>
                </Card>
                <Card class="content log">
                    <p class="tit">工作日志</p>
                    <FormItem>
                        <Input v-model="verifyForm.log" type="textarea" style="width:534px" :autosize="{minRows: 5,maxRows: 5}" placeholder="请输入工作日志…"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary">保存</Button>
                    </FormItem>
                </Card>
            </Form>
            <div slot="footer">
                <Button size="large" @click="cancel">取消</Button>
                <Button type="success" size="large" @click="confirm">确定</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
import realname from './component/real-name.vue';
import identity from './component/identity.vue';
export default {
    props: {
        refs: String,
        comList: Array
    },
    components: {
        realname,
        identity
    },
    data () {
        return {
            isOpen: false,
            histroyCol: [
                {
                    title: '提交时间',
                    key: 'name'
                },
                {
                    title: '审核员',
                    key: 'age'
                },
                {
                    title: '审核时间',
                    key: 'date'
                },
                {
                    title: '审核结果',
                    key: 'jieg'
                },
                {
                    title: '审核备注',
                    key: 'beiz'
                }
            ],
            histroyData: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03',
                    jieg: '已审核',
                    beiz: '备注内容'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01',
                    jieg: '已审核',
                    beiz: '备注内容'
                }
            ],
            verifyForm: {
                status: '正常',
                log: ''
            },
            record: {}
        };
    },
    created () {

    },
    methods: {
        openModel (data) {
            this.record = data;
            this.isOpen = true;
            this.$nextTick(function () {
                this.comList.forEach(element => {
                    this.$refs[element.comName][0].getInfo();
                });
            });
        },
        confirm () {
            this.isOpen = false;
        },
        cancel () {
            this.isOpen = false;
        }
    }
};
</script>
