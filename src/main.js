import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueElectron from 'vue-electron'
import vuetify from './plugins/vuetify'
Vue.use(VueElectron)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
