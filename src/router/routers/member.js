import createRoute from '../create';

const member = {
    name: 'member',
    title: '会员管理',
    icon: 'ios-paper',
    router: [{
        path: '/archives',
        icon: 'person',
        name: 'archives',
        title: '用户档案',
        children: [
            {
                path: 'manage',
                title: '会员管理',
                name: 'archives-manage',
                icon: 'arrow-move',
                component: createRoute('member/archives/manage')
            }
        ]
    }, {
        path: '/user',
        icon: 'person',
        name: 'user',
        title: '用户管理',
        children: [
            {
                path: 'blacklist',
                title: '发牌管理',
                name: 'blacklist-manage',
                icon: 'arrow-move',
                component: createRoute('member/user/blacklist')
            },
            {
                path: 'password',
                title: '找回支付密码申请',
                name: 'password-manage',
                icon: 'arrow-move',
                component: createRoute('member/user/password')
            }
        ]
    }, {
        path: '/other',
        icon: 'person',
        name: 'other',
        title: '其它模块管理',
        children: [
            {
                path: 'personal-loan',
                title: '个人借款发布',
                name: 'personal-loan',
                icon: 'arrow-move',
                component: createRoute('member/other/personal')
            }, {
                path: 'company-loan',
                title: '企业借款发布',
                name: 'company-loan',
                icon: 'arrow-move',
                component: createRoute('member/other/company')
            }
        ]
    }]
};

export default member;
