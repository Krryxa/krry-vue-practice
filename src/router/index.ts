import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sku',
    name: 'sku',
    component: () => import('@/views/shop/Sku.vue')
  },
  {
    path: '/imgLazy',
    name: 'imgLazy',
    component: () => import('@/views/ImgLazyDirective.vue')
  },
  {
    path: '/v_model/:id?',
    name: 'v_model',
    props: true,
    component: () => import('@/views/VModel.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
