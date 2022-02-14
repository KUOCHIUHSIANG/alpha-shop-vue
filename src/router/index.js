import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import checkoutPage from '../views/checkoutPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/checkoutPage'
  },
  {
    path: '/checkoutPage',
    name: 'checkoutPage',
    component: checkoutPage
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes
})

export default router
