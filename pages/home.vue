<template>
  <div class="app-home">
    <p class="app-explanation">
      書籍管理システム「Book MS」へようこそ。
      ログインして研究室にある書籍を確認してみましょう。
    </p>
    <sign-in-button class="app-sign-in-button" />
  </div>
</template>

<script>
import { Loading } from 'element-ui'
import { mapActions } from 'vuex'
import SignInButton from '../components/01_atoms/button/SignInButton'
import firebase from '~/plugins/firebase'

export default {
  name: 'AppHome',
  components: { SignInButton },
  async mounted() {
    const loadingInstance = Loading.service({ fullscreen: true })
    const user = await new Promise((resolve) => {
      firebase.auth().onAuthStateChanged((user) => resolve(user))
    })

    this.$nextTick(() => {
      loadingInstance.close()
    })

    if (!user) {
      return
    }

    this.setUsername(user.displayName)
    this.$router.push('/')
  },
  methods: {
    ...mapActions(['setUsername'])
  }
}
</script>

<style scoped>
.app-home {
  margin-top: 80px;
  text-align: center;
}

.app-explanation {
  font-size: 1.2rem;
  margin-bottom: 40px;
}

.app-sign-in-button {
}
</style>
