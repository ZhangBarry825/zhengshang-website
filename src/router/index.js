import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/home',
        redirect:'/'
    },
    {
        path: '/business/system',
        name: 'business',
        component: () => import( '../views/business-area/System')
    },
    {
        path: '/business/gov-cloud',
        name: 'govcloud',
        component: () => import( '../views/business-area/GovCloud')
    },
    {
        path: '/business/web-construct',
        name: 'WebConstruct',
        component: () => import( '../views/business-area/WebConstruct')
    },
    {
        path: '/business/mini-program',
        name: 'MiniProgram',
        component: () => import( '../views/business-area/MiniProgram')
    },
    {
        path: '/business/app-develop',
        name: 'Application',
        component: () => import( '../views/business-area/Application')
    },
    {
        path: '/business/internet-things',
        name: 'Things',
        component: () => import( '../views/business-area/Things')
    },
    {
        path: '/case',
        name: 'Case',
        component: () => import( '../views/case/Case')
    },
    {
        path: '/case-detail',
        name: 'CaseDetail',
        component: () => import( '../views/case/CaseDetail')
    },
    {
        path: '/news',
        name: 'News',
        component: () => import( '../views/news/News')
    },
    {
        path: '/news-detail',
        name: 'NewsDetail',
        component: () => import( '../views/news/News-detail')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import( '../views/Contact')
    },
    {
        path: '/about',
        name: 'AboutUs',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs')
    },
]

const router = new VueRouter({
    routes
})

export default router
