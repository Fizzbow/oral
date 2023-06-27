<template>
  <div
    flex="~ row"
    shrink-1
    basis-auto
    grow-1
    shadow-md
    ma-3
    pa-2
    rounded-2
    text-netural-3
    p-a-20
    max-w-lg
  >
    <div mr-1 v-for="n in nav">{{ n }}</div>
  </div>
</template>
<script lang="ts" setup>
const nav = ["[]", "[]"];
</script>
<style lang="scss"></style>
