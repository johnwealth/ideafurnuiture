import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'


Vue.use(VueResource);

axios.defaults.baseURL = 'https://ninjafurniturz.heroku.com'
axios.defaults.headers = {'Content-Type': 'application/json'}



// Response Interceptor to handle and log errors
axios.interceptors.response.use(function (response) {
  return response
},

 function (errors) {
  // eslint-disable-next-line
  return Promise.resolve(errors)
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
