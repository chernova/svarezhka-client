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

            <router-view />      
        </div>
      </main>
      <aside class="layout-aside"></aside>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppBreadcrumbs from "./components/AppBreadcrumbs";
import AppLeftMenu from "./components/AppLeftMenu";

export default {
  name: "App",
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

<style lang="stylus">
@import './styl/_reset';
@import './styl/_font';
@import './styl/_variables';
@import './styl/_global';
@import './styl/_text';
@import './styl/_button';
@import './styl/_input';
@import './styl/_container';
@import './styl/_layout';
</style>

<style>
@import "./assets/LineAwesome/css/line-awesome.min.css";
</style>
