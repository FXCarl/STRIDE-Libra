import Vue from 'vue'
import store from './store'
import router from './router'

// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({store, router}).$mount('#app')