// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import kbtHeader from './components/header/Header.vue'
import kbtFooter from './components/footer/Footer.vue'
Vue.config.productionTip = false
import axios from 'axios';

axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.component('my-header', kbtHeader)
Vue.component('my-footer', kbtFooter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
