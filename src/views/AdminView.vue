<template>
  <div class="pg-header"></div>
  <div class="pg-body">
    <div class="left-memu"></div>
    <div class="right-content" style="flex-grow: 1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AdminView',
}
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

.pg-body .left-memu{
  width: 280px;
  background-color: aliceblue;
  height: calc(100vh - 48px);
}

.pg-body .left-memu a{
  display: block;
  padding: 8px 10px;
  border-bottom: 1px solid #dddddd;
}

.pg-body .right-content{
  background-color: antiquewhite;
  height: calc(100vh - 48px);
}

</style>
