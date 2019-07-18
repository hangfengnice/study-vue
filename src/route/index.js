import Vue from "vue";
import Router from "vue-router";
import route from "./router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  route
});

const has_login = false;

router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    next();
  } else {
    has_login ? next() : next("/login");
  }
});

export default router;
