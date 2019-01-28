export default {
    // singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd:true,
            dva: true,
        }],
    ],
    routes: [
        {
            path: '/',component: '../layout/index',
            routes:[
                // {path:'/',component:'HelloWorld'},
                {path:'/helloworld',component:'HelloWorld'},
                {path: '/', component: 'puzzlecards' },
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
};