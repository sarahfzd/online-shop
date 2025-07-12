import { createRouter, createWebHistory } from 'vue-router'
import ShopPage  from './pages/ShopPage.vue'
import CartPage  from './pages/CartPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',        component: ShopPage },
    { path: '/cart',    component: CartPage }
  ]
})