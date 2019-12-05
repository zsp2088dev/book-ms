<template>
  <div class="book-price-text">
    <p>￥ {{ toLocalePrice }}</p>
  </div>
</template>

<script>
export default {
  name: 'BookPriceText',
  props: {
    price: {
      type: Number,
      default: 0
    }
  },
  computed: {
    toLocalePrice() {
      return this.price.toLocaleString()
    }
  }
}
</script>

<style scoped>
.book-price-text {
  color: #606266;
}
</style>
