import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import movielist from './components/movielist.vue'
import focus from './js/focus'

Vue.use(VueRouter)
Vue.use(focus)
var routes = [{
  path: '/:server/:page', component: movielist
},
{ path: '*', redirect:'/in_theaters/0' }]
var router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})