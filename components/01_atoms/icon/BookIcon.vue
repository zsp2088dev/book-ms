<template>
  <div class="book-icon">
    <img :src="src" alt="book-icon" width="150" height="150" />
  </div>
</template>

<script>
export default {
  name: 'BookIcon',
  computed: {
    src() {
      return require(`@/assets/images/book.svg`)
    }
  }
}
</script>

<style scoped></style>
