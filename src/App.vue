<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  background-image: linear-gradient(
    to left,
    #142a41,
    #0e3a51,
    #064a5d,
    #085b67,
    #1b6c6e
  );
  width: 100vw;
  height: 100vh;
}
</style>
