<template>
  <div id="main">
    <div id="login" class="panel">
      <h2>登录</h2>
      <form action>
        <div class="form-item">
          <label>
            <span class="txt">姓名：</span>
            <!-- <input type="text" class="form-input" ref="username" /> -->
            <input type="text" class="form-input" v-model="submitData.username" />
          </label>
        </div>
        <div class="form-item">
          <label>
            <span class="txt">密码：</span>
            <!-- <input type="password" class="form-input" ref="password" /> -->
            <input type="password" class="form-input" v-model="submitData.password" />
          </label>
        </div>

        <div class="form-item">
          <label>
            <span class="txt"></span>
            <button class="form-button primary" @click.prevent="doLogin">登录</button>
            <button class="form-button">注册</button>
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      submitData: {
        usename: "",
        password: "",
      },
    };
  },
  methods: {
    doLogin() {
      //收集用户填写的用户名和密码
      console.log(
        "收集用户填写的用户名和密码",
        this.$submitData
        // this.$refs.username.value,
        // this.$refs.password.value
      );

      //发送ajax请求
    },
  },
};
</script>