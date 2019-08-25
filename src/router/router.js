import Login from "@/views/login.vue";
import Layout from '../views/layout.vue'
import Home from '../views/Home.vue'

export default [
  {
    path: "/",
    name: "home",
    component: Layout,
    children: [
      {
        path: "home",
        component: Home
      },
      {
        path: 'table',
        component: () => import('../views/table.vue')
      },
      {
        path: "folder_tree",
        component: () => import('../views/folder-tree/folder-tree.vue')
      }
    ]
  },
  {
    path: "/store",
    name: "store",
    component: () => import("@/views/store.vue")
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
    path: "/countTo",
    name: "countTo",
    component: () => import("../views/countTo.vue")
  },
  {
    path: "/split-pane",
    name: "split_pane",
    component: () => import("../views/splitPane.vue")
  },
  {
    path: "/render_page",
    name: "render_page",
    component: () => import("../views/renderPage.vue")
  },
  {
    path: "/menuPage",
    name: "menuPage",
    component: () => import("../views/menuPage.vue")
  },
  {
    path: "/named_view",
    components: {
      default: () => import("../views/named.vue"),
      email: () => import("../views/email.vue"),
      telphone: () => import("../views/telphone.vue")
    }
  }
];
