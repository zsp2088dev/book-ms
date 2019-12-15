<template>
  <div class="app-form">
    <book-register-form />
  </div>
</template>

<script>
import BookRegisterForm from '../components/03_organisms/scoped/BookRegisterForm'

export default {
  name: 'AppForm',
  components: { BookRegisterForm }
}
</script>

<style scoped>
.app-form {
  width: 50%;
  margin: 80px auto 0;
}
</style>
