<template>
  <div id="main">
    <!-- <p>
        <img
          src="https://img30.360buyimg.com/sku/jfs/t1/69575/32/11798/397448/5d91726bE68337be7/09ff27589b478944.jpg"
        />
        <img
          src="https://img30.360buyimg.com/sku/jfs/t1/38339/24/12910/311964/5d415b40E2a2a96b6/8340eb0446ec0f34.jpg"
        />
        <img
          src="https://img30.360buyimg.com/sku/jfs/t1/72849/16/11305/367218/5d8971b3E175cf448/e24421863325f542.jpg"
        />
    </p>-->
    <div v-if="isError">
      <h3>获取商品失败</h3>
    </div>
    <div v-else>
      <div v-if="item">
        <h1 class="title">{{item.name}}</h1>
        <div class="detail" v-html="item.detail.detail"></div>
      </div>
      <div v-else>
        <p>数据加载中.....</p>
      </div>
    </div>
  </div>
</template>



<script>
import { getItem } from "@/api";
export default {
  name: "Detail",

  data() {
    return {
      item: null,
      isError: false,
    };
  },

  async created() {
    // try {
    //   let { data } = await getItem(this.$route.params.id);
    //   console.log("data", data);
    //   this.item = data;
    // } catch (e) {
    //   this.error = true;
    // }
  },

  //它比组件的初始化（组件 `beforeCreate`  之前）都要早

  // 所以在这里不能访问this
  // 守卫：它是一个生命周期函数（路由），因为它有点类似 koa - next
  // to,from 对应着访问之前的url与之后的url的对应$route对象
  async beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter", this, to.params.id);

    try {
      let { data } = await getItem(to.params.id);
      // this.item = data;
      // 如果是一个函数，那么这个函数会在导航确认以后在调用
      next(function (vm) {
        //vm => 组件的this
        vm.item = data;
      });
    } catch (e) {
      next(function (vm) {
        //vm => 组件的this
        vm.isError = true;
      });
    }

    // next();
  },
};
</script>