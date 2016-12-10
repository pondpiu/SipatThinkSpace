// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'

import Home from './components/Home';
import Directory from './components/Directory';
import About from './components/About';

// import some global styles
import './styles/style.scss'

Vue.use(VueRouter)

const routes = [
  { path: '/home', alias: '/', component: Home },
  { path: '/directory', component: Directory },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
