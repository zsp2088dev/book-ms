<template>
  <div class="book-title-text">
    <p>{{ bookTitle }}</p>
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
  },
  computed: {
    bookTitle() {
      if (this.title.length < 24) {
        return this.title
      } else {
        return this.title.substring(0, 22) + ' ...'
      }
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
