<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2c3e50;
}
</style>
