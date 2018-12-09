import Vue from 'vue'
import Meta from 'vue-meta'

import Vuefire from 'vuefire'
import './firebase'

import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/bootstrap-overrides.css'

Vue.config.productionTip = false
Vue.use(Meta)
Vue.use(Vuefire)
new Vue({
  render: h => h(App),
}).$mount('#app')
