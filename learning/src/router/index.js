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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/form.vue')
  },
  {
    path: '/display',
    name: 'display',
    component: () => import('../views/display.vue')
  },
  {
    path: '/alert',
    name: 'alert',
    component: () => import('../views/alert.vue')
  },
  {
    path: '/table-render',
    name: 'table-render',
    component: () => import('../views/table-render.vue')
  },
  {
    path: '/table-slot',
    name: 'table-slot',
    component: () => import('../views/table-slot.vue')
  },
  {
    path: '/table-slot-render',
    name: 'table-slot-render',
    component: () => import('../views/table-slot-render.vue')
  },
  {
    path: '/table-render-third',
    name: 'table-render-third',
    component: () => import('../views/table-render-third.vue')
  },
  {
    path: '/tree',
    name: 'tree',
    component: () => import('../views/tree.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
