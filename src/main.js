import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'
import store from './store/index'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

axios.defaults.baseURL = 'https://ts.thanhlh.selfip.com'
Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})