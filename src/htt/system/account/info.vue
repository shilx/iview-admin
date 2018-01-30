<style lang="less" scoped>
    .table-tit{
        font-size: 16px;
    }
    .info{
        .item-first{
            width: 140px;
        }
        .item-other{
            width: 20%;
            min-width: 220px;
            color: #464C5B;
            font-size: 12px;
            line-height: 36px;
            p{
                label{
                    width: 86px;
                    text-align: right;
                    color: #657180;
                    display: inline-block;
                    margin-right: 8px;
                }
                .changeInfo{
                    margin-left: 16px;
                }
                .limit{
                    color: #ED4016;
                    margin-left: 16px;
                    display: inline-block
                }
            }
        }
    }
</style>

<template>
    <div class="info">
        <Card shadow>
            <div slot="title" class="table-tit">基本资料</div>
            <Row type="flex">
                <Col class="item-first">
                    <div class="avatar">
                        <img src="javascritp:viod(0);" alt="">
                    </div>
                </Col>
                <Col class="item-other">
                    <p><label>姓名：</label>王小虎</p>
                    <p><label>办公电话：</label>0571-85254524<a class="changeInfo" @click="changeInfo">修改</a></p>
                    <p><label>职务：</label>组长</p>
                    <p><label>临时角色：</label>排查员<span class="limit">2017-11-16 8:30~2017-11-16 17:30</span></p>
                </Col>
                <Col class="item-other">
                    <p><label>账号：</label>Zhang</p>
                    <p><label>Email：</label>zxxx@163.com<a class="changeInfo" @click="changeInfo">修改</a></p>
                    <p><label>状态：</label>正常</p>
                </Col>
                <Col class="item-other">
                    <p><label>最近登录时间：</label>2017-11-12 14:25:43</p>
                    <p><label>手机号码：</label>15854523345<a class="changeInfo" @click="changeInfo">修改</a></p>
                    <p><label>角色：</label>审核员 排查员</p>
                </Col>
            </Row>
        </Card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value: '1'
        }
    },
    methods: {
        changeInfo () {
            this.$Modal.confirm({
                render: (h) => {
                    return h('Input', {
                        props: {
                            value: this.value,
                            autofocus: true,
                        },
                    })
                },
                onOk: () => {
                    console.log(this.value)
                },
            })
        }
    }
}
</script>
