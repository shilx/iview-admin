<template>
    <schedule>
        <Tabs type="card" class="immediately" :animated="false" @on-click="tabsClick">
            <TabPane name="1" label="开户审核" class="padding-top-9">
                <Table stripe :columns="accountCol" :data="accountList"></Table>
            </TabPane>
            <TabPane name="2" label="认证审核" class="padding-top-9">标签二的内容</TabPane>
            <TabPane name="3" label="借款审核" class="padding-top-9">标签三的内容</TabPane>
            <TabPane name="4" label="银行卡审核" class="padding-top-9">银行卡审核的内容</TabPane>
            <TabPane name="5" label="第三方排查" class="padding-top-9">第三方排查的内容</TabPane>
        </Tabs>
    </schedule>
</template>

<script>
import schedule from './components/audit-scheduling'
export default {
    name: 'schedule-company',
    components: {
        schedule
    },
    data () {
        return {
            type: 'cop',
            accountCol: [
                {
                    type: 'selection'
                },
                {
                    title: '序号',
                    key: 'number',
                },
                {
                    title: '员工',
                    key: 'name',
                },
                {
                    title: '职位',
                    key: 'position',
                },
                {
                    title: '手机号码',
                    key: 'mobile',
                },
                {
                    title: '办公电话',
                    key: 'tel',
                },
                {
                    title: '状态',
                    key: 'status',
                }
            ],
            accountList: [{
                number: 1,
                name: 1,
                position: 1,
                mobile: 1,
                tel: 1,
                status: 1,
            }],
        };
    },
    computed: {
        
    },
    methods: {
        tabsClick(tabName) {
            console.log(tabName)
        }
    }
};
</script>

<style>

</style>
