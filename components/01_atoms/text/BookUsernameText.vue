<template>
  <div class="book-username-text">
    <p>{{ username }} 所持</p>
  </div>
</template>

<script>
export default {
  name: 'BookUsernameText',
  props: {
    username: {
      type: String,
      default: 'Default'
    }
  }
}
</script>

<style scoped>
.book-username-text {
  color: #606266;
}
</style>
