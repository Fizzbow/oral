<template>
  <div id="oral_home" p-5>
    <header flex-row mb-3 flex flex-items-end>
      <Avatar mr-3 />
      <div text-5 font-900>oral's earth online</div>
    </header>
    <main grid="~ rows">
      <Branch
        v-for="b in brachMenu"
        :key="b.text"
        :img="b.img"
        :text="b.text"
        :to="b.to"
      />
    </main>
    <footer></footer>
  </div>
</template>
<script lang="ts" setup>
import Avatar from "../components/Header/Avatar.vue";
import Branch from "../components/Branch.vue";
import { brachMenu } from "../libs/branch-menu";
</script>
<style lang="scss" scoped></style>
