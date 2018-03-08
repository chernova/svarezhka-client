<template>
  <div class="app">
    <app-header></app-header>
    <app-breadcrumbs :items="breadcrumbItems"></app-breadcrumbs>
    <div class="layout">
      <nav role="navigation" class="layout-nav">
        <app-left-menu 
          v-for="(item, index) in leftMenuItems" 
          :key="index" 
          :items="item.items"
          :header="item.header"
          >
        </app-left-menu>
        <footer class="footer">
          сварежка &copy; 2018
        </footer>
      </nav>
      <main role="main" class="layout-central container-internal">
        <div class="content">
            <h1>{{ title }}</h1>
            <p class="text-muted">{{ subtitle }}</p>

            <router-view></router-view>
        </div>
      </main>
      <aside class="layout-aside"></aside>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
import AppBreadcrumbs from "./AppBreadcrumbs";
import AppLeftMenu from "./AppLeftMenu";

export default {
  name: "Main",
  components: {
    AppHeader,
    AppBreadcrumbs,
    AppLeftMenu
  },
  data() {
    return {
      title: "Настройки учётной записи",
      subtitle: "Ниже представлена ваша личная информация.",
      breadcrumbItems: [
        { label: "Настройки", url: "#" },
        { label: "Учётная запись", url: null }
      ],
      leftMenuItems: [
        {
          header: "Настройки",
          items: [
            { label: "Учётная запись", url: "/settings" },
            { label: "Профиль", url: "/profile" }
          ]
        }
      ]
    };
  }
};
</script>
