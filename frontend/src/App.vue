<template>
  <div>
    <the-header/>
    <router-view />
    <the-footer/>
  </div>
</template>

<script>

import TheHeader from "@/router/layouts/TheHeader";
import TheFooter from "@/router/layouts/TheFooter";

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
