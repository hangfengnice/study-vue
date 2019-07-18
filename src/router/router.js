import Login from "@/views/login.vue";

export default [
  {
    path: "/",
    name: "home",

    component: () => import("@/views/Home.vue")
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue')
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue")
  },

  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/named_view",

    components: 
    {
      default: () => import('../views/named.vue'),
      email: () => import('../views/email.vue'),
      telphone: () => import('../views/telphone.vue')

    }
  
  }
  
  
];
