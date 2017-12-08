import createRoute from '../create';

const member = {
    name: 'member',
    router: [{
        path: '/member',
        icon: 'person',
        name: 'member',
        title: '会员管理',
        children: [
            {
                path: 'member/manage',
                title: '借款管理',
                name: 'manage',
                icon: 'arrow-move',
                component: createRoute('member/manage')
            },
            {
                path: 'member/overdue',
                title: '逾期管理',
                name: 'overdue',
                icon: 'arrow-move',
                component: createRoute('member/overdue')
            }
        ]
    }]
};

export default member;
