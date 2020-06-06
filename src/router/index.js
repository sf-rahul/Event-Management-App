/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import mainpage from '../views/MainPage'
import register from  '../components/register/register'
import preview from '../components/preview/preview'
import login from '../components/auth/login'
import signup from '../components/auth/signup'

import events from '../components/events/events'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/events',
      name:'events',
      component:events
    },

  {
    path: '/home',
    name: 'home',
    component: mainpage
  },
  {
     
     path:'/register',
     name:'register',
     component: register

  },
  {
    path:'/register/preview',
    name:'preview',
    component:preview
  },
  {
    path:'/signin',
    name:'signin',
    component:login
  },

  {
    path:'/signup',
    name:'signup',
    component:signup
  }
 
]

const router = new VueRouter({
  routes
})

export default router
