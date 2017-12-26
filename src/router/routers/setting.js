import createRoute from '../create';

const setting = {
    name: 'setting',
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
                    component: createRoute('setting/level/user-group')
                },
                {
                    path: 'role',
                    title: '角色管理',
                    name: 'role',
                    component: createRoute('setting/level/role')
                },
                {
                    path: 'user',
                    title: '用户管理',
                    name: 'user',
                    component: createRoute('setting/level/user')
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
                    component: createRoute('setting/schedule/person')
                },
                {
                    path: 'company',
                    title: '企业审核排班',
                    name: 'schedule-company',
                    component: createRoute('setting/schedule/company')
                },
                {
                    path: 'overdue',
                    title: '逾期排班',
                    name: 'schedule-overdue',
                    component: createRoute('setting/schedule/overdue')
                },
                {
                    path: 'kf',
                    title: '客服排班',
                    name: 'schedule-kf',
                    component: createRoute('setting/schedule/kf')
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
                    component: createRoute('setting/account/info')
                },
                {
                    path: 'password',
                    title: '密码修改',
                    name: 'password',
                    component: createRoute('setting/account/password')
                }
            ]
        }
    ]
};

export default setting;
