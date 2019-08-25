import Vue from "vue";
import Router from "vue-router";
import routes from "./router";
import { getToken, setToken } from "../lib/utils";
import store from "../store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const has_login = false;

// router.beforeEach((to, from, next) => {
//   // if (to.path == "/login") {
//   //   next();
//   // } else {
//   //   has_login ? next() : next("/login");
//   // }
//   const token = getToken();
//   if (token) {
//     store
//       .dispatch("authorization", token)
//       .then(res => {
//         next();
//       })
//       .catch(() => {
//         setToken("");
//         next({ name: login });
//       });
//   } else {
//     if (to.name === "login") next();
//     else next({ name: "login" });
//   }
// });

export default router;
