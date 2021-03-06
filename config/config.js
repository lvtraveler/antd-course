export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd:true,
            dva: true,
            locale: {
                enable: true,
            },
        }],
    ],
    routes: [
        {
            path: '/',component: '../layout/index',
            routes:[
                {path:'/helloworld',component:'HelloWorld'},
                {path: '/', component: 'puzzlecards' },
                { path: 'list', component: '../page/list' },
                {
                    path:'/dashboard',
                    routes:[
                        { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                        { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                        { path: '/dashboard/workplace', component: 'Dashboard/Workplace' },
                        
                    ]
            
                },
            ]
        },
        
    ],
    proxy: {
        '/dev': {
          target: 'https://official-joke-api.appspot.com',
          changeOrigin: true,
          pathRewrite: { "^/dev": "" }
        },
    }
};