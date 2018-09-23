import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/DashboardPage'
import Billing from './views/BillingPage'
import Parental from './views/ParentalPage'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/billing',
      component: Billing
    },
    {
      path: '/parental',
      component: Parental
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
