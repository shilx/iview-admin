const example = {
    name: 'example',
    router: [
        {
            path: '/access',
            icon: 'key',
            name: 'access',
            title: '权限管理',
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
            children: [
                { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: resolve => { require(['@/views/access/access-test.vue'], resolve); } }
            ]
        },
        {
            path: '/international',
            icon: 'earth',
            title: { i18n: 'international' },
            name: 'international',
            children: [
                { path: 'index', title: { i18n: 'international' }, name: 'international_index', component: resolve => { require(['@/views/international/international.vue'], resolve); } }
            ]
        },
        {
            path: '/component',
            icon: 'social-buffer',
            name: 'component',
            title: '组件',
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
                }
                // {
                //     path: 'clipboard-page',
                //     icon: 'clipboard',
                //     name: 'clipboard-page',
                //     title: '一键复制',
                //     component: resolve => { require(['@/views/my-components/clipboard/clipboard.vue'], resolve); }
                // }
            ]
        },
        {
            path: '/form',
            icon: 'android-checkbox',
            name: 'form',
            title: '表单编辑',
            children: [
                { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: resolve => { require(['@/views/form/article-publish/article-publish.vue'], resolve); } },
                { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: resolve => { require(['@/views/form/work-flow/work-flow.vue'], resolve); } }

            ]
        },
        // {
        //     path: '/charts',
        //     icon: 'ios-analytics',
        //     name: 'charts',
        //     title: '图表',

        //     children: [
        //         { path: 'pie', title: '饼状图', name: 'pie', icon: 'ios-pie', component: resolve => { require('@/views/access/access.vue') },
        //         { path: 'histogram', title: '柱状图', name: 'histogram', icon: 'stats-bars', component: resolve => { require('@/views/access/access.vue') }

        //     ]
        // },
        {
            path: '/tables',
            icon: 'ios-grid-view',
            name: 'tables',
            title: '表格',
            children: [
                { path: 'dragableTable', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: resolve => { require(['@/views/tables/dragable-table.vue'], resolve); } },
                { path: 'editableTable', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: resolve => { require(['@/views/tables/editable-table.vue'], resolve); } },
                { path: 'searchableTable', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: resolve => { require(['@/views/tables/searchable-table.vue'], resolve); } },
                { path: 'exportableTable', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: resolve => { require(['@/views/tables/exportable-table.vue'], resolve); } },
                { path: 'table2image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: resolve => { require(['@/views/tables/table-to-image.vue'], resolve); } }
            ]
        },
        {
            path: '/advanced-router',
            icon: 'ios-infinite',
            name: 'advanced-router',
            title: '高级路由',
            children: [
                { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: resolve => { require(['@/views/advanced-router/mutative-router.vue'], resolve); } },
                { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: resolve => { require(['@/views/advanced-router/argument-page.vue'], resolve); } }
            ]
        },
        {
            path: '/error-page',
            icon: 'android-sad',
            title: '错误页面',
            name: 'errorpage',
            children: [
                { path: 'index', title: '错误页面', name: 'errorpage_index', component: resolve => { require(['@/views/error-page/error-page.vue'], resolve); } }
            ]
        }
    ]
};

export default example;
