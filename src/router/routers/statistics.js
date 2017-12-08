import createRoute from '../create';

const statistics = {
    name: 'statistics',
    router: [{
        path: '/statistics-loan',
        icon: 'person',
        name: 'statisticsloan',
        title: '业务统计',
        children: [
            {
                path: 'index',
                title: '业务操作统计',
                name: 'statistics_loan',
                icon: 'arrow-move',
                component: createRoute('statistics/loan')
            }
        ]
    }]
};

export default statistics;
