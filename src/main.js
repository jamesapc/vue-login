import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter)
// ** import path file ทุกครั้ง
import Login from './components/Login';
import User from './components/User';

Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  base: '__dirname',
  routes: [
    { path: '/', name: 'home' component: Login },
    { path: '/user', name: 'user' component: User }
  ]
})

new Vue({
  render: h => h(App),
}).$mount('#app')
