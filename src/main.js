import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
import router from './Router'
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
