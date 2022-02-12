<template>
  <div class="main__stepper">
    <div 
      :class="['step', { checked: currentPage !== 1 }]">
      <div class="circle-container"></div>
      <div class="label-container">寄送地址</div>
      <span class="connect-line"></span>
    </div>
    <div
      :class="['step', { active: currentPage === 2 }, { checked: currentPage === 3 }]">
      <div class="circle-container"></div>
      <div class="label-container">運送方式</div>
      <span class="connect-line"></span>
    </div>
    <div
    :class="['step', { active: currentPage === 3 }]">
      <div class="circle-container"></div>
      <div class="label-container">付款資訊</div>
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
      currentPage: this.initialCurrentPage,
    }
  }
}
</script>