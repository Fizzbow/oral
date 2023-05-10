<template>
  <RouterLink :to="to">
    <div
      @mouseenter="mouseOver"
      @mouseleave="mouseLeave"
      ref="brachRef"
      class="branch"
      h-11
      bg-home-second
      flex
      justify-center
      items-center
      rounded-7
      hover="cursor-pointer"
    >
      <span
        v-for="(letter, index) in letters"
        :key="index"
        :style="{ animationDelay: `${(index + 1) * 0.1}s` }"
        class="letter"
        text-6
        font-900
        op-0
        >{{ letter === " " ? "&nbsp;" : letter }}</span
      >
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import { ref } from "vue";
export interface BranchProps {
  text: string;
  img: string;
  to: {
    name: string;
  };
}
const props = defineProps<BranchProps>();

const brachRef = ref<HTMLElement>();
const letters = ref<Array<string>>();

function mouseOver() {
  letters.value = props.text.split("");
}
function mouseLeave() {
  letters.value = [];
}
</script>
<style lang="scss" scoped>
.letter {
  display: inline-block;
  opacity: 0;
  animation: reveal 0.5s ease-in-out forwards;
}

.branch:hover {
  border: 18px solid #2d60fd;
  box-shadow: 0 0 21px 3px rgba($color: #000, $alpha: 0.5) inset;
}

@keyframes reveal {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
