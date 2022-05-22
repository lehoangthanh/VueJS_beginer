import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import VueAxios from 'vue-axios'
import { router } from './router'
import store from './store/index'
console.log('=====',router)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(Toast, {
  timeout: 1500,
});
console.log('==aaa===',process.env.VUE_APP_BE_URL)
axios.defaults.baseURL = process.env.VUE_APP_BE_URL
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
