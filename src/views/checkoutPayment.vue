<template>
  <main class="container">
    <h1 class="main__title">結帳</h1>
    <Stepper :initial-current-page="currentPage" />
    <Cart />
    <div class="main__form">
      <form id="a-form">
        <div class="main__form__content">
          <div class="part">
            <h3 class="main__form-title">付款資訊</h3>
            <div class="main__form__grid-area-part-three">
              <div class="form-row cardOwner">
                <label for="cardOwner">持卡人姓名</label>
                <input id="cardOwner" type="text" placeholder="John Doe">
              </div>
              <div class="form-row cardNum">
                <label for="cardNum">卡號</label>
                <input id="cardNum" type="text" placeholder="1111 2222 3333 4444">
              </div>
              <div class="form-row thru">
                <label for="thru">有效期限</label>
                <input id="thru" type="text" placeholder="MM/YY">
              </div>
              <div class="form-row csc">
                <label for="csc">CVC/CCV</label>
                <input id="csc" type="text" placeholder="123">
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <Button :initial-current-page="currentPage" />
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
  },
  data() {
    return {
      currentPage: 3,
    }
  }
}
</script>