import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routerHistory = createWebHashHistory()

import homePage from './pages/home'
import aboutPage from './pages/about'
import notFound from './pages/notFound'

const routers = createRouter({
    history: routerHistory,
    routes:[
        {
            path: '/',
            name: 'home',
            component: homePage
        },
        {
            path: '/about',
            name: 'about',
            component: aboutPage
        },
        {
            path: '/:CatchAll(.*)',
            name: '404',
            component: notFound
        }
    ]
})

export default routers