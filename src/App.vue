<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to jing Li Vue.js App" /> -->
    <KHeader />
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import KHeader from "@/components/KHeader";

export default {
  name: "App",
  components: {
    KHeader,
  },
};
</script>
