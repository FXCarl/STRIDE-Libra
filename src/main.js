import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import routes from './routes'

Vue.use(VueRouter)

// keep it simple for now.
const router = new VueRouter({
  routes
})

// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({store, router}).$mount('#app')