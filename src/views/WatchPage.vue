<template>
  <div>
    <h1>Video ID: {{ $route.query.id }}</h1>
  </div>
</template>

<script>
export default {
  name: "WatchPage",
  created () {
    document.title =  `Video ID: ${this.$route.query.id} | Modanisa Bootcamp`;
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>