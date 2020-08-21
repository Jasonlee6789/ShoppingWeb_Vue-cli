<template>
  <div id="main">
    <ul class="items-list">
      <!-- <router-link :to="'/detail/'+item.id" tag="li" class="panel" v-for="item of items" :key="item.id"> -->
      <router-link
        :to="{
          name: 'Detail',
          //动态路由参数params
          params: {
            id: item.id,
          },
        }"
        tag="li"
        class="panel"
        v-for="item of items"
        :key="item.id"
      >
        <img :src="item.cover" alt class="cover" />
        <div class="name">{{ item.name }}</div>
        <div class="price">{{ item.price | price }}</div>
      </router-link>
    </ul>

    <div class="pagination-container">
      <!-- <div class="pagination">
        <a href class="prev">上一页</a>
        <a href>1</a>
        <a href>2</a>
        <a href>3</a>
        <a href class="current">4</a>
        <a href>5</a>
        <a href>6</a>
        <a href>7</a>
        <a href>8</a>
        <a href class="next">下一页</a>
      </div>-->
      <KPagination :page="page" :total="total" :prepage="prepage" @change="changePage" />
    </div>
  </div>
</template>

<script>
import { getItems } from "@/api";
import price from "@/filters/price";
import KPagination from "@/components/KPagination";

export default {
  name: "Home",
  data() {
    return {
      items: [],
      page: 1,
      total: 0,
      prepage: 8,
    };
  },
  filters: {
    price,
  },
  components: {
    KPagination,
  },
  async created() {
    // 登陆了吗？
    // let isLogin = true;
    let isLogin = !!localStorage.getItem("token");

    if (!isLogin) {
      this.$router.push({ name: "Login" });
    } else {
      await this.getItems();
    }
  },

  watch: {
    async $route() {
      console.log("url has been switched");
      await this.getItems();
    },
  },
  // $route: 满足当前url而创建的一个对象，这个对里面存储与当前url匹配的路由信息
  methods: {
    changePage(p) {
      // if (p !== this.page) {
      //   console.log("重新发送请求");
      //   this.getItems();
      // }
      //为了便于分享第几页的网址url，把上面注释掉
      // 通过querystring来改变当前页面当url
      // 如果路由两次跳转使用当是同一个组件的时候，这个组件是不会销毁然后重建的，而是原地home.vue复用，created生命周期不会执行
      // $router: 实际上就是 new VueRouter 得到的对象，它代表来整个应用的路由信息，提供路由公用的配置信息和方法，比如 push

      this.$router.push({
        name: "Home",
        query: {
          page: p,
        },
      });
    },

    async getItems() {
      this.page = this.$route.query.page || 1;

      //请求完成之前，Home组件实际已经渲染了
      let {
        data: { items, page, prepage, total },
      } = await getItems({
        page: this.page,
        prepage: this.prepage,
      });

      // console.log('items', items);

      // 当从后台拿到数据发生改变以后，Home.vue 又会渲染一次
      this.items = items;
      this.page = page;
      this.total = total;
      this.prepage = prepage;
    },
  },
};
</script>
