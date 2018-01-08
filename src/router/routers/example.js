const example = {
    name: 'example',
    router: [{
        path: '/access',
        icon: 'key',
        name: 'access',
        title: '权限管理',
        // component: Main,
        children: [
            { path: 'index', title: '权限管理', name: 'access_index', component: resolve => { require(['@/views/access/access.vue'], resolve); } }
        ]
    },
    {
        path: '/access-test',
        icon: 'lock-combination',
        title: '权限测试页',
        name: 'accesstest',
        access: 0,
        // component: Main,
        children: [
            { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: resolve => { require(['@/views/access/access-test.vue'], resolve); } }
        ]
    },
    {
        path: '/international',
        icon: 'earth',
        title: { i18n: 'international' },
        name: 'international',
        // component: Main,
        children: [
            { path: 'index', title: { i18n: 'international' }, name: 'international_index', component: resolve => { require(['@/views/international/international.vue'], resolve); } }
        ]
    },
    {
        path: '/component',
        icon: 'social-buffer',
        name: 'component',
        title: '组件',
        // component: Main,
        children: [
            {
                path: 'text-editor',
                icon: 'compose',
                name: 'text-editor',
                title: '富文本编辑器',
                component: resolve => { require(['@/views/my-components/text-editor/text-editor.vue'], resolve); }
            },
            {
                path: 'md-editor',
                icon: 'pound',
                name: 'md-editor',
                title: 'Markdown编辑器',
                component: resolve => { require(['@/views/my-components/markdown-editor/markdown-editor.vue'], resolve); }
            },
            {
                path: 'image-editor',
                icon: 'crop',
                name: 'image-editor',
                title: '图片预览编辑',
                component: resolve => { require(['@/views/my-components/image-editor/image-editor.vue'], resolve); }
            },
            {
                path: 'draggable-list',
                icon: 'arrow-move',
                name: 'draggable-list',
                title: '可拖拽列表',
                component: resolve => { require(['@/views/my-components/draggable-list/draggable-list.vue'], resolve); }
            },
            {
                path: 'area-linkage',
                icon: 'ios-more',
                name: 'area-linkage',
                title: '城市级联',
                component: resolve => { require(['@/views/my-components/area-linkage/area-linkage.vue'], resolve); }
            },
            {
                path: 'file-upload',
                icon: 'android-upload',
                name: 'file-upload',
                title: '文件上传',
                component: resolve => { require(['@/views/my-components/file-upload/file-upload.vue'], resolve); }
            },
            {
                path: 'count-to',
                icon: 'arrow-graph-up-right',
                name: 'count-to',
                title: '数字渐变',
                component: resolve => { require(['@/views/my-components/count-to/count-to.vue'], resolve); }
            },
            {
                path: 'split-pane-page',
                icon: 'ios-pause',
                name: 'split-pane-page',
                title: 'split-pane',
                component: resolve => { require(['@/views/my-components/split-pane/split-pane-page.vue'], resolve); }
            }
        ]
    },
    {
        path: '/form',
        icon: 'android-checkbox',
        name: 'form',
        title: '表单编辑',
        // component: Main,
        children: [
            { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: resolve => { require(['@/views/form/article-publish/article-publish.vue'], resolve); } },
            {
                path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: resolve => { require(['@/views/form/work-flow/work-flow.vue'], resolve); }
            }]
    }]
};

export default example;
