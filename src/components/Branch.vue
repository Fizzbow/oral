<template>
  <RouterLink :to="to">
    <div
      class="branch"
      h-11
      bg-home-second
      flex
      justify-center
      items-center
      rounded-7
      hover="cursor-pointer"
    >
      <span transition-opacity text-6 font-900 op-0>{{ text }}</span>
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
export interface BranchProps {
  text: string;
  img: string;
  to: {
    name: string;
  };
}
defineProps<BranchProps>();
</script>
<style lang="scss" scoped>
.branch:hover {
  border: 18px solid #2d60fd;
  box-shadow: 0 0 21px 3px rgba($color: #000, $alpha: 0.5) inset;
  > span {
    opacity: 1;
  }
}
</style>
