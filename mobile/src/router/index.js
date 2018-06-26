import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product  from '@/components/Product'
import Customize from '@/components/Customize'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Personal from '@/components/Personal'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { 
      path: '/product',
      name: 'Product',
      component: Product
    },
    { 
      path: '/customize',
      name: 'Customize',
      component: Customize
    },
    { 
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/reg',
      name:'Name',
      component:Reg
    },
    {
      path:'/personal',
      name:'personal',
      component:Personal
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart
    }
  ]
})
