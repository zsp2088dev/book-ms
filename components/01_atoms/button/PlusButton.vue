<template>
  <div class="plus-button">
    <el-button
      @click="pushRegisterBookPage"
      class="plus-el-button"
      type="primary"
      size="medium"
      circle
    >
      ＋
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'PlusButton',
  methods: {
    pushRegisterBookPage() {
      this.$router.push('/form')
    }
  }
}
</script>

<style scoped>
.plus-el-button {
  font-size: 2rem;
  padding: 15px;
}
</style>
