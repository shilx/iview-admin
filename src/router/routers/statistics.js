import createRoute from '../create';

const statistics = {
    name: 'statistics',
    router: [{
        path: '/statistics',
        icon: 'person',
        name: 'statistics',
        title: '业务统计',
        children: [
            {
                path: 'index',
                title: '业务操作统计',
                name: 'index',
                component: createRoute('statistics/index')
            }
        ]
    }]
};

export default statistics;
