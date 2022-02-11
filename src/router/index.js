import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import checkoutAddress from '../views/checkoutAddress.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/checkoutPage/step1'
  },
  {
    path: '/checkoutPage',
    name: 'checkoutPage',
    redirect: '/checkoutPage/step1'
  },
  {
    path: '/checkoutPage/step',
    name: 'checkout-step',
    redirect: '/checkoutPage/step1'
  },
  {
    path: '/checkoutPage/step1',
    name: 'checkout-step-address',
    component: checkoutAddress
  },
  {
    path: '/checkoutPage/step2',
    name: 'checkout-step-delivery',
    component: () => import('../views/checkoutDelivery')
  },
  {
    path: '/checkoutPage/step3',
    name: 'checkout-step-payment',
    component: () => import('../views/checkoutPayment')
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
