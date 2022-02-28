import { createRouter, createWebHashHistory } from "vue-router";
const routes = [{
        path: "/login",
        name: "login",
        component: () =>
            import ("../views/login/index.vue"),
    },
    {
        path: "/",
        name: "layout",
        component: () =>
            import ("../views/layout/index.vue"),
        children: [{
                path: "a",
                name: "home",
                component: () =>
                    import ("../views/home/index.vue"),
            },
            {
                path: "/qa",
                name: "qa",
                component: () =>
                    import ("../views/qa/index.vue"),
            },
            {
                path: "/video",
                name: "video",
                component: () =>
                    import ("../views/video/index.vue"),
            },
            {
                path: "/my",
                name: "my",
                component: () =>
                    import ("../views/my/index.vue"),
            },
        ],
    },
];
// 2、创建路由实例
const router = createRouter({
    //createWebHistory
    history: createWebHashHistory(),
    routes,
});
export default router;
// 3、创建登录组件
// 4、指定出口