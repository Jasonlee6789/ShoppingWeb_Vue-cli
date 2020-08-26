<template>
  <header id="header">
    <a href="/" id="logo"></a>

    <nav id="nav">
      <a href="">手机</a>
      <a href="">笔记本</a>
      <a href="">家居</a>
    </nav>

    <!-- <div id="user">
            <a href="">登录</a>
            <a href="">注册</a>
        </div> -->
    <div id="user">
      <div v-if="user">
        <router-link :to="{ name: 'User' }"> {{ user.name }}</router-link>
        <span style="cursor: pointer;" @click="logout">LogOut</span>
      </div>
      <div v-else>
        <router-link :to="{ name: 'Login' }"> 登录</router-link>
      </div>

      <!-- <a href="">注册</a> -->
    </div>
  </header>
</template>

<script>
export default {
  name: "KHeaduserer",
  // data() {
  //   return {
  //     user: null,
  //   };
  // },

  // created() {
  //   let storageUser = localStorage.getItem("user");
  //   if (storageUser) {
  //     this.user = JSON.parse(storageUser);
  //     console.log(storageUser);
  //   }
  // },

  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  methods: {
    logout() {
      localStorage.removeItem("user");
      window.location.reload();
    },
  },
};
</script>
