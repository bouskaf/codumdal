import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// filters
Vue.filter('to-uppercase', function(value) {
  return value.toUpperCase();
})

Vue.filter('snippet', function(value) {
  return value.slice(0,100) + '...';
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
