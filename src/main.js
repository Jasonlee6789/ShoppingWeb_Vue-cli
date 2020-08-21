import Vue from "vue";
import App from "./App.vue";

//@ => webpack resolve => /src 方法不同的地方去引用 src 目录
import "@/assets/static/css/css.css";

import router from "@/router";

Vue.config.productionTip = false;

// import VueRouter from "vue-router";
// import Main from "@/views/Main.vue";

// Vue.use(VueRouter);

// let a = new VueRouter({
//   //所有的路由映射,每一个路由就是一个对象
//   routes: [
//     {
//       path: "/",
//       component: Main,
//     },
//   ],
// });

new Vue({
  router: router,
  //Render函数是Vue2.x版本新增的一个函数；
  // 使用虚拟dom来渲染节点提升性能，因为它是基于JavaScript计算。
  // 通过使用createElement(h)来创建dom节点。
  //createElement,可以写成h是render的核心方法。
  //其Vue编译的时候会把template里面的节点解析成虚拟dom；
  render: (h) => h(App),
}).$mount("#app");
