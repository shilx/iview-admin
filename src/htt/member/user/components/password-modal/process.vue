<style lang="less" scoped>
    .process-modal{
        .process{
            padding-left: 32px;
            padding-right: 32px;
            padding-top: 56px;
            label{
                font-size: 14px;
                color: #464C5B;
            }
            .ivu-checkbox-wrapper{
                display: block;
                +.ivu-checkbox-wrapper{
                    margin-top: 12px;
                }
            }
        }
        .ivu-btn{
            width: 95px;
            height: 34px;
        }
    }
</style>
<template>
    <Modal
        class="process-modal"
        v-model="open"
        title="处理"
        width="740">

        <userinfo></userinfo>

        <Row type="flex" align="middle" class="process">
            <Col span="3">
                <label>理由：</label>
            </Col>
            <Col span="21">
                <CheckboxGroup v-model="checkbox">
                    <Checkbox label="1">请上传包含完整五官的首页吃身份证照，要求脸部无遮挡，身份证上信息清晰可见。</Checkbox>
                    <Checkbox label="2">请上传包含完整五官的手持身份证照，详情可参考示例图。</Checkbox>
                    <Checkbox label="3">请上传完整的手持身份证照，保证身份证上的信息清晰可见。</Checkbox>
                    <Checkbox label="4">请上传非镜像的手持身份证照。</Checkbox>
                    <Checkbox label="5">谢谢！</Checkbox>
                </CheckboxGroup>
            </Col>
        </Row>

        <opinion></opinion>

        <div slot="footer">
            <Button @click="cancel">取消</Button>
            <Button @click="cancel">作废</Button>
            <Button @click="cancel">退回</Button>
            <Button @click="confirm" type="success">确定</Button>
        </div>
    </Modal>
</template>
<script>
import userinfo from './components/user-info';
import opinion from './components/opinion';
export default {
    components: {
        userinfo,
        opinion
    },
    data () {
        return {
            open: false,
            creditCard: [
                {
                    num: 6238478787876667777,
                    name: '中国建设银行行长吴山支行',
                    isDefault: true
                }, {
                    num: 6238478787876667777,
                    name: '中国银行庆春支行',
                    isDefault: false
                }
            ],
            checkbox: []
        };
    },
    methods: {
        confirm () {

        },
        cancel () {
            this.open = false;
        }
    }
};
</script>
