<template>
  <main class="container">
    <h1 class="main__title">結帳</h1>
    <Stepper :initial-current-page="currentPage" />
    <Cart />
    <div class="main__form">
      <form id="a-form">
        <div class="main__form__content">
          <div class="part">
            <h3 class="main__form-title">寄送地址</h3>
            <div class="main__form__grid-area-part-one">
              <div class="form-row gender">
                <label for="gender">稱謂</label>
                <div class="select-wrapper">
                  <select name="a-type" id="gender">
                    <option value="">先生</option>
                    <option value="">小姐</option>
                    <option value="">其他</option>
                  </select>
                </div>
              </div>
              <div class="form-row name">
                <label for="name">姓名</label>
                <input id="name" type="text" placeholder="請輸入姓名">
              </div>
              <div class="form-row phone">
                <label for="phone">電話</label>
                <input id="phone" type="text" placeholder="請輸入行動電話">
              </div>
              <div class="form-row email">
                <label for="email">Email</label>
                <input id="email" type="mail" placeholder="請輸入電子郵件">
              </div>
              <div class="form-row city">
                <label for="city">縣市</label>
                <div class="select-wrapper">
                  <select name="a-type" id="city" required>
                    <option value="" disabled selected>請選擇縣市</option>
                    <option value="">台北市</option>
                    <option value="">新北市</option>
                    <option value="">台中市</option>
                    <option value="">高雄市</option>
                  </select>
                </div>
              </div>
              <div class="form-row address">
                <label for="address">地址</label>
                <input id="address" type="text" placeholder="請輸入地址">
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

// const STORAGE_KEY = "alpha-shop-vue"

export default {
  components: {
    Stepper,
    Cart,
    Button
  },
  data() {
    return {
      currentPage: 1,
    }
  }
}
</script>