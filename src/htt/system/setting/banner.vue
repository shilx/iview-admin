<style lang="less" scoped>
.border-b{
    border-bottom: 1px solid #DDDEE1;
    padding: 16px;
}
</style>

<template>
    <div>
        <Card :padding="0" :dis-hover="true">
            <searcher-tools
                :toolsButton="toolsButton"
                v-on:add="openModal"></searcher-tools>
            <div class="pd16">
                <Table stripe :columns="accountCol" :data="accountList" class="list"></Table>
            </div>
        </Card>
        <banner-modal ref="bannerModal"></banner-modal>
    </div>
</template>

<script>
import searcherTools from '@/htt/components/searcher-tools';
import bannerModal from './components/banner-modal.vue';
export default {
    name: '',
    components: {
        searcherTools,
        bannerModal
    },
    data () {
        return {
            toolsButton: [
                {
                    type: "success",
                    text: "添加banner图片",
                    style: "width:116px",
                    handle: "add"
                }
            ],
            accountCol: [
                {
                    title: '图片地址',
                    key: 'resfz',
                },
                {
                    title: '图片链接',
                    key: 'rehandfz',
                },
                {
                    title: '操作人',
                    key: 'rephone',
                },
                {
                    title: '提交时间',
                    key: 'loginunlock',
                },
                {
                    title: '排序',
                    key: 'payun',
                },
                {
                    title: '操作',
                    key: 'findpw',
                    render: this.operatR
                }
            ],
            accountList: [
                {name:1,
                resetpaypw:1,
                resetloginpw:1,
                resetq:1,
                resfz:1,
                rehandfz:1,
                rephone:1,
                loginunlock:1,
                payun:1}
            ],
        }
    },
    computed: {
        
    },
    methods: {
        operatR(h, params) {
            return h('div', [
                h('Button', {
                    props: {
                        type: 'error'
                    },
                    on: {
                        click: () => {
                            this.$refs.productModal.changeModal = true
                        }
                    }
                }, '删除'),
            ]);
        },
        openModal(){
            this.$refs.bannerModal.open = true
        }
    },
};
</script>