<template>
  <div class="pg-header"></div>
  <div class="pg-body">
    <div class="left-menu">
      <router-link :key="item.name" v-for="item in routerList" :to="{name:item.name}">{{
          item.meta.title
        }}
      </router-link>
<!--      <router-link :to="{name:'user'}">xxx</router-link>-->
    </div>
    <div class="right-content" style="flex-grow: 1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>

import {computed} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter();
const routerList = computed(()=>{
  let totalRouteList = router.getRoutes();
  console.log(router.getRoutes());
  return totalRouteList.filter(item =>{
    if (item.meta.is_menu) {
      return true;
    }else {
      console.log("error");
    }
  })
});

</script>

<style scoped>

.pg-header{
  height: 48px;
  background-color: brown;
}

.pg-body{
  display: flex;
  flex-direction: row;
}

.pg-body .left-menu{
  width: 280px;
  background-color: aliceblue;
  height: calc(100vh - 48px);
}

.pg-body .left-menu a{
  display: block;
  padding: 8px 10px;
  border-bottom: 1px solid #dddddd;
}

.pg-body .right-content{
  background-color: antiquewhite;
  height: calc(100vh - 48px);
}

</style>
