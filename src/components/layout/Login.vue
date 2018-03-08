<template>
<div class="login">
    <h1>Войти в систему</h1>
    <p class="text-muted">Войдите в систему, используя ваши личные данные.</p>
    <div class="alert danger" v-if="errors.length > 0">
        {{ errors[0] }}
    </div>
    <form @submit.prevent="onLogin">
        <div class="input">
            <input v-model="email" type="email" placeholder="Электронная почта" required>
            <i class="la la-at"></i> 
        </div>
        <div class="input">
            <input v-model="password" type="password" placeholder="Пароль" required minlength="6">
            <i class="la la-lock"></i> 
        </div>
        <button type="submit" class="button info block">Войти</button>
    </form>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["errors", "user"])
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    onLogin() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style lang="stylus">
@import '../../styl/_variables';
@import '../../styl/_login';
</style>
