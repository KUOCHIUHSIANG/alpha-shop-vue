<template>
  <main class="container">
    <h1 class="main__title">結帳</h1>
    <Stepper />
    <Cart />
    <Button />
  </main>   
</template>

<script>
import Stepper from '../components/stepper.vue'
import Cart from '../components/cart.vue'
import Button from '../components/checkoutButton.vue'

export default {
  components: {
    Stepper,
    Cart,
    Button
  }
}
</script>