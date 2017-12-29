<template>
    <schedule>
        <Tabs type="card" :animated="false" @on-click="tabsClick">
            <TabPane name="1" label="逾期排班" class="pdt9">
                <Table stripe :columns="accountCol" :data="accountList"></Table>
            </TabPane>
        </Tabs>
    </schedule>
</template>

<script>
import schedule from './component/audit-scheduling'
export default {
    name: 'schedule-overdue',
    components: {
        schedule
    },
    data () {
        return {
            type: 'overdue',
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
