<template>
  <div
    :class="['main__button', { 'justify-content-flex-end': currentPage === 1},  { 'justify-content-space-between': currentPage !== 1}]">
    <div
    :class="['main__button__previous', { 'd-none': currentPage === 1}]">
      <button 
        @click="redirectPreviousPage(currentPage)"
        class="previous">
        ← 上一步
      </button>
    </div>
    <div class="main__button__next stepOne">
      <button 
        @click="redirectNextPage(currentPage)"
        class="next" 
        v-if="currentPage !== 3"
      >
        下一步 →
      </button>
      <button 
        class="next" 
        v-else
      >
        確認下單
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    initialCurrentPage: {
      type: Number
    }
  },
  data() {
    return {
      currentPage: this.initialCurrentPage
    }
  },
  methods: {
    redirectNextPage(currentPage) {
      const nextPage = currentPage + 1
      if (nextPage < 4) {
        this.$router.push('/checkoutPage/step' + nextPage)
        this.currentPage += 1
      }
      
    },
    redirectPreviousPage(currentPage) {
      const previousPage = currentPage - 1
      if (previousPage > 0) {
        this.$router.push('/checkoutPage/step' + previousPage)
        this.currentPage -= 1
      }
      
    }
  }
}
</script>