import createRoute from '../create';

const member = {
    name: 'member',
    title: '会员管理',
    icon: 'ios-paper',
    router: [{
        path: '/member',
        icon: 'person',
        name: 'member',
        title: '会员管理',
        children: [
            {
                path: 'member/loan',
                title: '借款管理',
                name: 'loan-manage',
                icon: 'arrow-move',
                component: createRoute('member/loan')
            },
            {
                path: 'member/overdue',
                title: '逾期管理',
                name: 'overdue-manage',
                icon: 'arrow-move',
                component: createRoute('member/overdue')
            }
        ]
    }]
};

export default member;
