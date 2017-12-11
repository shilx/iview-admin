import createRoute from '../create';

const loan = {
    name: 'loan',
    router: [
        {
            path: '/verify-per',
            icon: 'person',
            name: 'verify-per',
            title: '个人审核',
            children: [
                {
                    path: 'account',
                    title: '开户审核',
                    name: 'per_account',
                    component: createRoute('loan/per-account')
                },
                {
                    path: 'info',
                    title: '认证审核',
                    name: 'per_info',
                    component: createRoute('loan/per-info')
                }
            ]
        },
        {
            path: '/verify-cop',
            icon: 'home',
            name: 'verify-cop',
            title: '企业审核',
            children: [
                {
                    path: 'account',
                    title: '开户审核',
                    name: 'cop_account',
                    component: createRoute('loan/cop-account')
                },
                {
                    path: 'info',
                    title: '认证审核',
                    name: 'cop_info',
                    component: createRoute('loan/cop-info')
                }
            ]
        }
    ]
};

export default loan;
