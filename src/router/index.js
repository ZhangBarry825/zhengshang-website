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
      path: '/business',
      name: 'business',
      component:  () => import( '../views/Business')
    },
    {
      path: '/gov-cloud',
      name: 'govcloud',
      component:  () => import( '../views/GovCloud')
    },
  {
    path: '/web-construct',
    name: 'WebConstruct',
    component:  () => import( '../views/WebConstruct')
  },
  {
    path: '/mini-program',
    name: 'MiniProgram',
    component:  () => import( '../views/MiniProgram')
  },
  {
    path: '/app-develop',
    name: 'App',
    component:  () => import( '../views/App')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Things',
    name: 'Things',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Things" */ '../views/things/Things.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
