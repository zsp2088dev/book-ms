<template>
  <div class="sign-in-button">
    <el-button @click="signInGoogle" plain>ログイン</el-button>
  </div>
</template>

<script>
import { signIn } from '~/plugins/firebase'

export default {
  name: 'SignInButton',
  methods: {
    signInGoogle() {
      signIn()
    }
  }
}
</script>
