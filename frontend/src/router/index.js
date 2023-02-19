import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import("./views/MainPage.vue"),
    },
    {
        path: '/myPage',
        name: 'myPage',
        component: () => import("./views/MyPage.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;