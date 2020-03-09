import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'

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
