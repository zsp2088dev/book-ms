<template>
  <div class="book-publication-date-text">
    <p>{{ bookPublicationDate }}</p>
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
  },
  computed: {
    bookPublicationDate() {
      const includeDate = this.date.split('-').length - 1 === 2

      if (includeDate) {
        return this.date.replace(/(\d+)-(\d+)-(\d+)/g, '$1年$2月$3日')
      } else {
        return this.date.replace(/(\d+)-(\d+)/g, '$1年$2月')
      }
    }
  }
}
</script>

<style scoped>
.book-publication-date-text {
  color: #606266;
}
</style>
