// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import store from './vuex/store'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Home from './components/Home';
import Directory from './components/Directory';
import About from './components/About';
import Search from './components/Search';
import Booking from './components/Booking';

import rAjaxHandler from './helper_scripts/rajax';
// import some global styles
import './styles/style.scss'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/home', alias: '/', component: Home },
  { path: '/directory', component: Directory },
  { path: '/about', component: About },
  { path: '/search', component: Search },
  { path: '/booking', component: Booking }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
