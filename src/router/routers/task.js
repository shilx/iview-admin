import createRoute from '../create';

const task = {
    name: 'task',
    router: [{
        path: '/task',
        icon: 'person',
        name: 'task',
        title: '任务提醒',
        children: [
            { path: 'my', title: '我的任务', name: 'my', component: createRoute('task/my') },
            { path: 'team', title: '组内任务', name: 'team', component: createRoute('task/team') }
        ]
    }]
};

export default task;
