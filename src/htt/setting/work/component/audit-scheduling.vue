<style lang="less" scoped>
    .white{
        background-color: white;
    }
    .pd16{
        padding: 16px;
    }
    .pdt9{
        padding-top: 9px;
    }
</style>

<template>
    <Tabs type="card" :animated="false">
        <TabPane label="立即排班" class="pd16 no-bd-tabs">
            <Tabs type="card" class="immediately" :animated="false">
                <TabPane label="开户审核" class="pdt9">
                    <Table stripe :columns="accountCol" :data="accountList"></Table>
                </TabPane>
                <TabPane label="认证审核" class="pdt9">标签二的内容</TabPane>
                <TabPane label="借款审核" class="pdt9">标签三的内容</TabPane>
                <TabPane label="第三方排查" class="pdt9">第三方排查的内容</TabPane>
            </Tabs>
        </TabPane>
        <TabPane label="预约排班" class="pd16">
            <Table stripe :columns="accountCol" :data="accountList"></Table>
        </TabPane>
    </Tabs>
</template>

<script>
export default {
    data () {
        return {
            accountCol: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '序号',
                    key: 'userId',
                    width: 80,
                },
                {
                    title: '员工',
                    key: 'nickname',
                    width: 160
                },
                {
                    title: '职位',
                    key: 'cellphone',
                    width: 160
                },
                {
                    title: '手机号码',
                    key: 'idNumber',
                    width: 200
                },
                {
                    title: '办公电话',
                    key: 'submitTime',
                    width: 200
                },
                {
                    title: '状态',
                    key: 'operatorName',
                    align: 'center'
                }
            ],
            accountList: [],
        };
    },
    computed: {
        
    },
    methods: {
        
    }
};
</script>

<style>

</style>
