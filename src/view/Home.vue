<template>
  <div id="oral_home" h-screen w-screen flex="~ col" p-5>
    <header flex-row mb-10 flex flex-items-end>
      <Avatar mr-3 />
      <div text-5 font-900>oral's earth online</div>
    </header>

    <main flex-grow-1 flex justify-center>
      <div m-y-0 m-x-a gap-7 max-w-screen-md flex="~ row" w-100 justify-between>
        <Branch
          max-w-100
          flex-basis-0
          flex-grow-1
          flex-shrink-1
          v-for="b in brachMenu"
          :key="b.text"
          :img="b.img"
          :text="b.text"
          :to="b.to"
        />
      </div>
    </main>

    <FooterSite />
  </div>
</template>
<script lang="ts" setup>
import Avatar from "../components/Header/Avatar.vue";
import Branch from "../components/Branch.vue";
import FooterSite from "@/components/FooterSite.vue";
import { brachMenu } from "../libs/branch-menu";
</script>
<style lang="scss" scoped>
#oral_home {
  background-image: linear-gradient(
    to left,
    #142a41,
    #0e3a51,
    #064a5d,
    #085b67,
    #1b6c6e
  );
}
</style>
