<template>
  <div class="register-book-button">
    <el-button
      @click="pushRegisterBookPage"
      icon="el-icon-plus"
      class="register-book-el-button"
    >
      新規登録
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'RegisterBookButton',
  methods: {
    pushRegisterBookPage() {
      this.$router.push('/form')
    }
  }
}
</script>

<style scoped>
.register-book-el-button {
  height: 50px;
}
</style>
