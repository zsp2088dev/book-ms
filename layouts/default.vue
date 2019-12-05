<template>
  <el-container class="app">
    <el-header>
      <div class="header">
        <img @click="pushTopPage" :src="path" alt="logo" width="224" />
        <el-button @click="registerBook" icon="el-icon-plus" class="form-button"
          >新規登録</el-button
        >
      </div>
    </el-header>

    <el-main class="main">
      <nuxt />
    </el-main>
  </el-container>
</template>

<script>
export default {
  computed: {
    path() {
      return require(`@/assets/images/logo.svg`)
    }
  },
  methods: {
    registerBook() {
      this.$router.push('/form')
    },
    pushTopPage() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.app {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
    'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', Roboto, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #2e2e2e;
  -webkit-font-smoothing: antialiased;
}

.header {
  color: #409eff;
  height: 80px;
  line-height: 80px;
  margin-left: 80px;
  margin-right: 80px;
  padding-top: 20px;
  border-bottom-color: rgb(220, 223, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.form-button {
  height: 50px;
  margin-right: 30px;
  margin-top: 15px;
}

.main {
  margin-top: 80px;
  margin-left: 80px;
  margin-right: 80px;
}
</style>
