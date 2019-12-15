<template>
  <div class="book-author-text">
    <p>{{ author }} 著</p>
  </div>
</template>

<script>
export default {
  name: 'BookAuthorText',
  props: {
    author: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.book-author-text {
  color: #606266;
}
</style>
