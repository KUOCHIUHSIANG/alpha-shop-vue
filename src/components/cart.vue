<template>
  <div class="main__cart">
  <div class="main__cart__title">
    <h4>購物籃</h4>
  </div>
  <div class="main__cart__list">
    <div class="main__cart__item">
      <div class="main__cart__item__img">
        <img src="../assets/cart_item_01.png" alt="">
      </div>
      <div class="main__cart__item__title">
        <span>破壞補丁修身牛仔褲</span>
      </div>
      <div class="main__cart__item__price">
        <span class="price currencySymbol">3999</span>
      </div>
      <div class="main__cart__item__counter">
        <div class="main__cart__item__counter__minus"></div>
        <div class="main__cart__item__counter__amount">1</div>
        <div class="main__cart__item__counter__plus"></div>
      </div>
    </div>
    <div class="main__cart__item">
      <div class="main__cart__item__img">
        <img src="../assets/cart_item_02.png" alt="">
      </div>
      <div class="main__cart__item__title">
        <span>刷色直筒牛仔褲</span>
      </div>
      <div class="main__cart__item__price">
        <span class="price currencySymbol">1299</span>
      </div>
      <div class="main__cart__item__counter">
        <div class="main__cart__item__counter__minus"></div>
        <div class="main__cart__item__counter__amount">1</div>
        <div class="main__cart__item__counter__plus"></div>
      </div>
    </div>
  </div>
  <div class="main__cart__footer">
    <div class="main__cart__footer__fee">
      <div class="title">運費</div>
      <div :class="['fee', { currencySymbol: deliveryFee !== '免費' }]">{{ deliveryFee }}</div>
    </div>
    <div class="main__cart__footer__total">
      <div class="title">小計</div>
      <div class="total"><span class="total currencySymbol">5298</span></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    deliveryFee: {
      type: [String, Number],
      default: '免費'
    }
  }
}
</script>