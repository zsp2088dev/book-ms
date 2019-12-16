<template>
  <div class="book-publication-date-text">
    <p>{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: 'BookPublicationDateText',
  props: {
    date: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.book-publication-date-text {
  color: #606266;
}
</style>
