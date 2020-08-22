<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to jing Li Vue.js App" /> -->
    <KHeader />
    <transition name="fade">
      <router-view></router-view>
    </transition>
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

<style>
.fade-enter-active {
  transition: opacity 6s;
}
.fade-leave-active {
  transition: none;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
