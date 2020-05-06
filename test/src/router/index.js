import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // redirect: '/about',
    component: About,
    children: [
      {
        path: 'about',
        component: () => import('../views/Hello.vue'),
        name: 'dashboard'

      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
