import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/DashboardPage'
import Billing from './views/BillingPage'
import Parental from './views/ParentalPage'
import Setting from './views/SettingPage'
import PersonalSetting from './components/setting/PersonalSetting'
import BillingSetting from './components/setting/BillingSetting'
import UpgradeSetting from './components/setting/UpgradeSetting'
import ManageSetting from './components/setting/ManageSetting'



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
    },
    {
      path: '/setting',
      component: Setting,
      children:[
        {
          path:"",
          redirect: 'personal'
        },
        {
          path:'personal',
          component:PersonalSetting
        },
        {
          path:'billing',
          component:BillingSetting
        },
        {
          path:'upgrade',
          component:UpgradeSetting
        },
        {
          path:'manage',
          component:ManageSetting
        }      
      ]
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
