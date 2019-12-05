<template>
  <div class="app-logo">
    <img @click="pushTopPage" :src="src" alt="app-logo" width="224" />
  </div>
</template>

<script>
export default {
  name: 'AppLogo',
  computed: {
    src() {
      return require(`@/assets/images/logo.svg`)
    }
  },
  methods: {
    pushTopPage() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped></style>
