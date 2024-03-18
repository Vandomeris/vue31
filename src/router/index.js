import { createRouter, createWebHistory } from "vue-router"
import HomePage from '../pages/HomePage.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Главная',
            component: HomePage
        },
        {
            path: '/about',
            component: () => import('../pages/AboutPage.vue')
        },
        {
            path: '/users',
            component: () => import('../pages/UsersPage.vue')
        },
        {
            path: '/allusers',
            component: () => import('../pages/AllUsersPage.vue')
        },
        {
            path: '/user/:id',
            component: () => import('../pages/UserPage.vue')
        }

    ]
})

export default router