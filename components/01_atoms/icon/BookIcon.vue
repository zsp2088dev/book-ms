<template>
  <div class="book-icon">
    <img :src="src" alt="book-icon" width="150" height="150" />
  </div>
</template>

<script>
export default {
  name: 'BookIcon',
  props: {
    icon: {
      type: String,
      default: 'Book'
    }
  },
  computed: {
    src() {
      return require(`@/assets/images/card/${this.icon}.svg`)
    }
  }
}
</script>
