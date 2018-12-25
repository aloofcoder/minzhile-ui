import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
require('./css/minzhile.css')
new Vue({
  render: h => h(App),
}).$mount('#app')
