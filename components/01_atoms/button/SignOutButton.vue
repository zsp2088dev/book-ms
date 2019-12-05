<template>
  <div class="sign-out-button">
    <el-button @click="signInGoogle" plain>SignOut</el-button>
  </div>
</template>

<script>
import { signOut } from '~/plugins/firebase'

export default {
  name: 'SignOutButton',
  methods: {
    signInGoogle() {
      signOut()
    }
  }
}
</script>

<style scoped></style>
