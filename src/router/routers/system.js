import createRoute from '../create';

const system = {
    name: 'system',
    title: '系统设置',
    icon: 'ios-paper',
    router: [
        {
            path: '/level',
            icon: 'person',
            name: 'level',
            title: '系统设置',
            children: [
                {
                    path: 'user-group',
                    title: '用户组管理',
                    name: 'user-group',
                    component: createRoute('system/level/user-group')
                },
                {
                    path: 'role',
                    title: '角色管理',
                    name: 'role',
                    component: createRoute('system/level/role')
                },
                {
                    path: 'user-manage',
                    title: '用户管理',
                    name: 'user-manage',
                    component: createRoute('system/level/user')
                }
            ]
        },
        {
            path: '/schedule',
            icon: 'person',
            name: 'schedule',
            title: '排班管理',
            children: [
                {
                    path: 'person-manage',
                    title: '个人审核排班',
                    name: 'person-manage',
                    component: createRoute('system/schedule/person')
                },
                {
                    path: 'company-manage',
                    title: '企业审核排班',
                    name: 'company-manage',
                    component: createRoute('system/schedule/company')
                },
                {
                    path: 'overdue-manage',
                    title: '逾期排班',
                    name: 'overdue-manage',
                    component: createRoute('system/schedule/overdue')
                },
                {
                    path: 'kf-manage',
                    title: '客服排班',
                    name: 'kf-manage',
                    component: createRoute('system/schedule/kf')
                }
            ]
        },
        {
            path: '/account',
            icon: 'person',
            name: 'account',
            title: '账号管理',
            children: [
                {
                    path: 'info-manage',
                    title: '个人信息',
                    name: 'info-manage',
                    component: createRoute('system/account/info')
                },
                {
                    path: 'password-manage',
                    title: '密码修改',
                    name: 'password-manage',
                    component: createRoute('system/account/password')
                }
            ]
        },
        {
            path: '/system',
            icon: 'person',
            name: 'system',
            title: '设置管理',
            children: [
                {
                    path: 'product-set',
                    title: '产品设置',
                    name: 'product-set',
                    component: createRoute('system/setting/product')
                },
                {
                    path: 'contract-set',
                    title: '合同模板设置',
                    name: 'contract-set',
                    component: createRoute('system/setting/contract')
                },
                {
                    path: 'msg-set',
                    title: '消息模板设置',
                    name: 'msg-set',
                    component: createRoute('system/setting/msg')
                },
                {
                    path: 'holiday-set',
                    title: '假期管理设置',
                    name: 'holiday-set',
                    component: createRoute('system/setting/holiday')
                },
                {
                    path: 'banner-set',
                    title: '首页banner设置',
                    name: 'banner-set',
                    component: createRoute('system/setting/banner')
                },
                {
                    path: 'update-set',
                    title: '版本更新',
                    name: 'update-set',
                    component: createRoute('system/setting/update')
                }
            ]
        }
    ]
};

export default system;
