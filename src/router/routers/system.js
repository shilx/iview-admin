import createRoute from '../create';

const system = {
    name: 'system',
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
                    path: 'user',
                    title: '用户管理',
                    name: 'user',
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
                    path: 'person',
                    title: '个人审核排班',
                    name: 'schedule-person',
                    component: createRoute('system/schedule/person')
                },
                {
                    path: 'company',
                    title: '企业审核排班',
                    name: 'schedule-company',
                    component: createRoute('system/schedule/company')
                },
                {
                    path: 'overdue',
                    title: '逾期排班',
                    name: 'schedule-overdue',
                    component: createRoute('system/schedule/overdue')
                },
                {
                    path: 'kf',
                    title: '客服排班',
                    name: 'schedule-kf',
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
                    path: 'info',
                    title: '个人信息',
                    name: 'info',
                    component: createRoute('system/account/info')
                },
                {
                    path: 'password',
                    title: '密码修改',
                    name: 'password',
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
                    path: 'product',
                    title: '产品设置',
                    name: 'product',
                    component: createRoute('system/setting/product')
                },
                {
                    path: 'contract',
                    title: '合同模板设置',
                    name: 'contract',
                    component: createRoute('system/setting/contract')
                },
                {
                    path: 'msg',
                    title: '消息模板设置',
                    name: 'msg',
                    component: createRoute('system/setting/msg')
                },
                {
                    path: 'holiday',
                    title: '假期管理设置',
                    name: 'holiday',
                    component: createRoute('system/setting/holiday')
                },
                {
                    path: 'banner',
                    title: '首页banner设置',
                    name: 'banner',
                    component: createRoute('system/setting/banner')
                },
                {
                    path: 'update',
                    title: '版本更新',
                    name: 'update',
                    component: createRoute('system/setting/update')
                }
            ]
        }
    ]
};

export default system;
