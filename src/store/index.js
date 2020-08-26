import Vue from "vue";
import Vuex from "vuex";
import { login } from "@/api";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    uploadUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async login(store, payload) {
      let rs = await login(payload);
      store.commit("uploadUser", rs.data);
      //上面这句用login方法发送请求
      // 把当前登陆的用户信息记录到localStorage里面
      localStorage.setItem("user", JSON.stringify(rs.data));
      //存储起来那个token令牌
      localStorage.setItem("token", rs.headers.authorization);
    },
  },
});

export default store;
