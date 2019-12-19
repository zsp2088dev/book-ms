<template>
  <div class="sign-out-button">
    <el-button @click="signInGoogle" plain>ログアウト</el-button>
  </div>
</template>

<script>
import { signOut } from '~/plugins/firebase'

export default {
  name: 'SignOutButton',
  methods: {
    signInGoogle() {
      signOut()
      this.$store.dispatch('setUsername', null)
      this.$router.push('/home')
    }
  }
}
</script>
