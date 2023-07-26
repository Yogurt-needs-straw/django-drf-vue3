<template>
  <div class="box">
    <p>
      <input type="text" placeholder="用户名" v-model="state.user">
    </p>
    <p>
      <input type="text" placeholder="密码" v-model="state.pwd">
    </p>
    <p>
      <select v-model="state.role">
        <option :value="ele.value" v-for="ele in state.roleList" :key="ele.value">{{ele.text}}</option>
      </select>
    </p>
    <p>
      <input type="button" value="登录" @click="doLogin"/>
    </p>
  </div>
</template>

<script setup>

import {reactive} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const store = useStore();
const router = useRouter();

const state = reactive({
  user:"wer",
  pwd:"123",
  role:"user",
  roleList:[
    {text:"管理员", value:"admin"},
    {text:"经理", value: "manager"},
    {text:"用户", value: "user"},
  ],
})

function doLogin() {
  // 1.向后台发送请求登录成功
  // 2.返回信息
  const context = {
    token:"123423423445353",
    role:state.role,
  };
  // 3.保存到vuex
  store.commit("login",context);

  // 4.跳转到后台
  router.replace({name:"basic"})
}

</script>

<style scoped>
.box{
  border: 1px solid #ddd;
  width: 300px;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
}
</style>
