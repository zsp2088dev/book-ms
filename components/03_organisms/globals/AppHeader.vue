<template>
  <div class="app-header">
    <div class="app-header-items">
      <app-logo @click="pushTopPage" />
      <register-book-button @click="pushRegisterPage" />
    </div>
  </div>
</template>

<script>
import AppLogo from '../../01_atoms/icon/AppLogo'
import RegisterBookButton from '../../01_atoms/button/RegisterBookButton'
export default {
  name: 'AppHeader',
  components: { RegisterBookButton, AppLogo },
  methods: {
    pushTopPage() {
      this.$router.push('/')
    },
    pushRegisterPage() {
      this.$router.push('/form')
    }
  }
}
</script>

<style scoped>
.app-header-items {
  height: 80px;
  line-height: 80px;
  padding-top: 20px;
  border-bottom-color: rgb(220, 223, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
</style>
