<template>
    <schedule>
        时间：<DatePicker
            type="daterange"
            format="yyyy/MM/dd"
            :transfer="true"
            style="width: 245px">
        </DatePicker>
        <Tabs type="card" :animated="false" @on-click="tabsClick" class="padding-top-9">
            <TabPane name="1" label="还款提醒"></TabPane>
            <TabPane name="2" label="找回支付密码"></TabPane>
            <TabPane name="3" label="补足余额提醒"></TabPane>
        </Tabs>
        <Table stripe :columns="accountCol" :data="accountList"></Table>
    </schedule>
</template>

<script>
import schedule from './components/audit-scheduling'
export default {
    name: 'schedule-kf',
    components: {
        schedule
    },
    data () {
        return {
            type: 'kf',
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
