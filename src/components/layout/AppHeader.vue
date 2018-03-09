<template>
  <header class="header">
      <div class="container">
        <div class="logo">σВарежка</div>
        <div class="right">
          <div class="search icon">
            <i class="la la-search"></i>
          </div>
          <div class="notification icon">
            <i class="la la-bell"></i>
          </div>
          <div class="name">
            Привет, <strong>{{ username }}!</strong>
          </div>
          <div class="user" @click.stop="showMenu = !showMenu"> 
            <div class="avatar">
              <img src="/static/zoey.jpg" :alt="username">
            </div>
            <div class="menu-expander">
              <i class="la la-ellipsis-h"></i>
            </div>
            <ul class="sub-menu" :class="{ show: showMenu }">
              <li>
                <a href="#"><i class="la la-user"></i> Профиль</a>
              </li>
              <li>
                <a href="#"><i class="la la-cogs"></i> Настройки</a>
              </li>
              <div class="divider"></div>
              <li>
                <a @click="onLogout()"><i class="la la-sign-out"></i> Выход</a>
              </li>
            </ul>
          </div>
        </div> 
      </div>
    </header>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      username: "Зоя",
      photo: "",
      showMenu: false
    };
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="stylus">
@import '../../styl/_variables';
@import '../../styl/_header';
</style>
