<template>
  <div>basic</div>
  <ul>
    <li v-if="hasPermission(['admin','manager'])">查看</li>
    <li>新增</li>
    <li>修改</li>
    <li>删除</li>
  </ul>

</template>

<script setup>

import {onMounted} from "vue";
import {hasPermission} from "@/store/permission";


onMounted(()=>{
  initPage();
})

function initPage() {
  if(hasPermission(['admin','manager'])){
    return;
  }

  //...

}




</script>

<style scoped>

</style>
