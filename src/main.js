import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

import App from './App.vue'

const routes = [
  { path: '/intro', component: App }
]

// keep it simple for now.
const router = new VueRouter({
  routes
})

// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!
router.push('/intro')