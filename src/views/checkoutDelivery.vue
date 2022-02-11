<template>
  <main class="container">
    <h1 class="main__title">結帳</h1>
    <Stepper />
    <Cart />
    <div class="main__form">
      <form id="a-form">
        <div class="main__form__content">
          <div class="part">
            <h3 class="main__form-title">運送方式</h3>
            <div class="main__form__grid-area-part-two">
              <div class="form-row delivery standard-delivery">
                <label for="standard-delivery" class="standard-delivery delivery-active">
                  <input id="standard-delivery" type="radio" name="delivery" checked>
                  <div class="standard-delivery__wrapper">
                    <div class="standard-delivery__wrapper__title">
                      <span>標準運送</span>
                      <span class="standard-delivery__wrapper__fee">免費</span>
                    </div>
                    <div class="standard-delivery__wrapper__takesTime">
                      <span>約 3~7 個工作天</span>
                    </div>
                  </div>
                </label>
              </div>
              <div class="form-row delivery dhl-delivery">
                <label for="dhl-delivery" class="dhl-delivery">
                  <input id="dhl-delivery" type="radio" name="delivery">
                  <div class="dhl-delivery__wrapper">
                    <div class="dhl-delivery__wrapper__title">
                      <span>DHL 貨運</span>
                      <span class="dhl-delivery__wrapper__fee currencySymbol">500</span>
                    </div>
                    <div class="dhl-delivery__wrapper__takesTime">
                      <span>48小時內送達</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
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