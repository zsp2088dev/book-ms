<template>
  <div class="book-publication-date-text">
    <p>{{ toDateString }}</p>
  </div>
</template>

<script>
export default {
  name: 'BookPublicationDateText',
  props: {
    date: {
      type: Object,
      default: () => ({
        seconds: 0
      })
    }
  },
  computed: {
    toDateString() {
      const timestamp = new Date(this.date.seconds * 1000)
      const year = timestamp.getFullYear()
      const month = timestamp.getMonth() + 1
      const date = timestamp.getDate()
      return `${year}年${month}月${date}日 発売`
    }
  }
}
</script>

<style scoped>
.book-publication-date-text {
  color: #606266;
}
</style>
