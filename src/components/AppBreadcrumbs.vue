<template>
  <nav aria-label="Breadcrumb" class="container-internal">
      <ol class="breadcrumbs">
        <li :key="index" v-for="(item, index) in allItems">
          <a :href="item.url" v-if="item.url !== null">{{ item.label }}</a>
          <span v-else>{{ item.label }}</span>
        </li>
      </ol>
  </nav>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      showHome: true
    };
  },
  computed: {
    allItems: function() {
      let items = this.items.slice();
      if (this.showHome) {
        items.unshift({
          label: "Главная",
          url: "/"
        });
      }
      return items;
    }
  }
};
</script>

<style lang="styl">
@import '../styl/_variables';
@import '../styl/_breadcrumbs';
</style>
