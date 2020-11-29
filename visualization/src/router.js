import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('./views/Main.vue')
    },
    {
      path: '/all',
      name: 'all',
      component: () => import('./views/AllTweets.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('./views/Account.vue')
    }
  ]
})
