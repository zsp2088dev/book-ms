<template>
  <div class="app-form">
    <book-form />
  </div>
</template>

<script>
import BookForm from '../components/03_organisms/scoped/BookForm'
export default {
  name: 'AppForm',
  components: { BookForm }
}
</script>

<style scoped>
.app-form {
  width: 50%;
  margin: 80px auto 0;
}
</style>
