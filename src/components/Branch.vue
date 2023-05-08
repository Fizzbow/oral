<template>
  <RouterLink :to="to">
    <div
      class="branch"
      min-w-8
      min-h-7
      bg-home-second
      flex
      justify-center
      items-center
      rounded-7
      hover="cursor-pointer"
    >
      <span transition-opacity text-4 font-900 op-0 white>{{ text }}</span>
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
  box-shadow: 0 0 21px 3px rgba($color: #000, $alpha: 0.5) inset,
    0 15px 54px 10px rgba($color: #000, $alpha: 0.3);
  > span {
    opacity: 1;
  }
}
</style>
