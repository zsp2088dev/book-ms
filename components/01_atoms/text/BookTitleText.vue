<template>
  <div class="book-title-text">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'BookTitleText',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.book-title-text {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
