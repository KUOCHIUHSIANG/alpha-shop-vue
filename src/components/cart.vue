<template>
  <div class="main__cart">
    <div class="main__cart__title">
      <h4>購物籃</h4>
    </div>
    <div class="main__cart__list">
      <div v-for="item in cartItems" :key="item.id" class="main__cart__item">
        <div class="main__cart__item__img">
          <img :src="item.image" alt="" />
        </div>
        <div class="main__cart__item__title">
          <span> {{ item.name }} </span>
        </div>
        <div class="main__cart__item__price">
          <span class="price currencySymbol">{{ item.price }}</span>
        </div>
        <div class="main__cart__item__counter">
          <div
            @click="adjustAmount(item.id, '-', item.amount)"
            class="main__cart__item__counter__minus"
          ></div>
          <div class="main__cart__item__counter__amount">{{ item.amount }}</div>
          <div
            @click="adjustAmount(item.id, '+', item.amount)"
            class="main__cart__item__counter__plus"
          ></div>
        </div>
      </div>
    </div>
    <div class="main__cart__footer">
      <div class="main__cart__footer__fee">
        <div class="title">運費</div>
        <div :class="['fee', { currencySymbol: deliveryFee !== '免費' }]">
          {{ deliveryFee }}
        </div>
      </div>
      <div class="main__cart__footer__total">
        <div class="title">小計</div>
        <div class="total">
          <span class="total currencySymbol">{{ totalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = {
  cartItems: [
    {
      id: 1,
      name: "破壞補丁修身牛仔褲",
      image: "/img/cart_item_01.f164f523.png",
      price: 3999,
    },
    {
      id: 2,
      name: "刷色直筒牛仔褲",
      image: "/img/cart_item_02.53c490ec.png",
      price: 1299,
    },
  ],
};

export default {
  props: {
    deliveryFee: {
      type: [String, Number],
      default: "免費",
    },
  },
  created() {
    this.fetchCartItems();
    this.calcTotal();
  },
  data() {
    return {
      cartItems: [],
      totalPrice: 0,
    };
  },
  methods: {
    fetchCartItems() {
      this.cartItems = dummyData.cartItems.map((item) => {
        return {
          ...item,
          amount: 1,
        };
      });
    },
    adjustAmount(itemId, signs) {
      this.cartItems = this.cartItems.map((item) => {
        if (item.id === itemId) {
          if (signs === "+") {
            return {
              ...item,
              amount: item.amount + 1,
            };
          } else if (signs === "-" && item.amount !== 0) {
            // 讓 amount 等於0的時候，不會再減1
              return {
                ...item,
                amount: item.amount - 1,
              };
          }
        }
        return item;
      });
      this.calcTotal();
    },
    calcTotal() {
      // 渲染畫面（重新計算小計）前先歸零，不然舊小計會疊加上去
      this.totalPrice = 0; 
      for (let i = 0; i < this.cartItems.length; i++) {
        this.totalPrice += this.cartItems[i].price * this.cartItems[i].amount;
      }
      if (this.deliveryFee === '免費') {
        return
      } else if(this.totalPrice !== 0) {
        // 讓商品數量都是0的狀況（小計是0）時，讓小計不會有運費
        this.totalPrice += this.deliveryFee
      }
    },
  },
  watch: {
    deliveryFee() {
      this.calcTotal()
    }
  }
};
</script>