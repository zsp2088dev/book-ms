<template>
  <div class="app-logo">
    <img :src="src" alt="app-logo" width="224" />
  </div>
</template>

<script>
export default {
  name: 'AppLogo',
  computed: {
    src() {
      return require(`@/assets/images/logo.svg`)
    }
  }
}
</script>

<style scoped></style>
