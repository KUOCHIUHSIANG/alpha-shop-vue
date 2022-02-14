<template>
  <main class="container">
    <h1 class="main__title">結帳</h1>
    <Stepper :initial-current-page="currentPage" />
    <Cart :delivery-fee="deliveryFee" />
    <div class="main__form">
      <form id="a-form">
        <div class="main__form__content">
          <div :class="['part', { 'd-none': currentPage !== 1 }]">
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
          <div :class="['part', { 'd-none': currentPage !== 2 }]">
            <h3 class="main__form-title">運送方式</h3>
            <div class="main__form__grid-area-part-two">
              <div class="form-row delivery standard-delivery">
                <label for="standard-delivery" 
                :class="['standard-delivery', { 'delivery-active':  deliverySelected === 'standard' }]">
                  <input @change="deliveryOnChange($event)" v-model="deliverySelected" id="standard-delivery" value="standard" type="radio" name="delivery" checked>
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
                <label for="dhl-delivery"
                :class="['dhl-delivery', { 'delivery-active':  deliverySelected === 'dhl' }]">
                  <input @change="deliveryOnChange($event)" v-model="deliverySelected" id="dhl-delivery" value="dhl" type="radio" name="delivery">
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
          <div :class="['part', { 'd-none': currentPage !== 3 }]">
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
    <Button :initial-current-page="currentPage" @page-controller="pageController" />
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
      deliverySelected: 'standard',
      deliveryFee: '免費',
    }
  },
  methods: {
    deliveryOnChange(event) {
      const data = event.target.value
      if(data === 'standard'){
        this.deliveryFee = '免費'
        console.log('免費')
      } else if(data === 'dhl'){
        this.deliveryFee = 500
        console.log('500')
      }
    },
    pageController(currentPage) {
      this.currentPage = currentPage
    }
  }
}
</script>