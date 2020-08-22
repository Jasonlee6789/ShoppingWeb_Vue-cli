import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Home from "@/views/Home.vue";
import Detail from "@/views/Detail.vue";
import Login from "@/views/Login.vue";
import Logon from "@/views/Register.vue";

// 注册
Vue.use(VueRouter);
// 创建一个路由对象 和 koa 类似
let router = new VueRouter({
  // home.vue中的$router: 实际上就是 new VueRouter 得到的对象，它代表来整个应用的路由信息，提供路由公用的配置信息和方法，比如 push
  mode: "history",
  // 所有的路由映射，每一个路由就是一个对象
  routes: [
    {
      // path => component
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/logon",
      name: "Logon",
      component: Logon,
    },
  ],
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
