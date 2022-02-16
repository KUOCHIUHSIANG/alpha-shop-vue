<template>
  <div
    :class="['main__button', { 'justify-content-flex-end': currentPage === 1},  { 'justify-content-space-between': currentPage !== 1}]">
    <div
    :class="['main__button__previous', { 'd-none': currentPage === 1}]">
      <button 
        @click="redirectPreviousPage"
        class="previous">
        ← 上一步
      </button>
    </div>
    <div class="main__button__next stepOne">
      <button 
        @click="redirectNextPage"
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
    redirectNextPage() {
      const nextPage = this.currentPage + 1
      if (nextPage < 4) {
        this.currentPage += 1
      }
      this.$emit('page-controller', this.currentPage)
    },
    redirectPreviousPage() {
      const previousPage = this.currentPage - 1
      if (previousPage > 0) {
        this.currentPage -= 1
      }
      this.$emit('page-controller', this.currentPage)
    }
  }
}
</script>