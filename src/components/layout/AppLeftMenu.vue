<template>
  <ul class="left-menu">
    <li class="menu-title">{{ header }}</li>
    <li :key="index" v-for="(item, index) in items" class="menu-item">
      <router-link :to="item.url">{{ item.label }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["header", "items"],
  data() {
    return {
      activeItem: 0
    };
  }
};
</script>

<style lang="styl">
@import "../../styl/_variables";
@import "../../styl/_left-menu";
</style>
