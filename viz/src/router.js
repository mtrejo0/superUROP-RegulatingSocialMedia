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
      path: '/account',
      name: 'account',
      component: () => import('./views/Account.vue')
    },
    {
      path: '/accounts/:user',
      name: 'accounts',
      component: () => import('./views/OtherAccount.vue'),
      props: true
    },
    { path: "*", component: () => import('./views/PageNotFound.vue')}
  ]
})
