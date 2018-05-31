// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    if (window.localStorage) {
      let localUserString = window.localStorage.getItem("user") || "null"
      let localUser = JSON.parse(localUserString)
      if (localUser && this.$store.getters.user !== localUser) {
        this.$store.dispatch("autoLogin", localUser)
      }
    }
  }
})
