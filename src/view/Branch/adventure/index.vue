<template>
  <div w-screen h-screen>
    <Space :fov="50" :far="0.1" :near="1000" />
  </div>
</template>
<script lang="ts" setup>
import Space from "@/components/Three/Space.vue";
</script>
