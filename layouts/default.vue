<template>
  <el-container class="app">
    <el-header>
      <div class="header">
        <img :src="path" alt="logo" width="224" />
        <el-input
          v-model="input"
          placeholder="タイトル、著者名、タグで検索"
          class="header-search-input"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-header>

    <el-main class="main">
      <nuxt />
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  computed: {
    path() {
      return require(`@/assets/images/logo.svg`)
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
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}

.header-search-input {
  width: 500px;
  margin-left: 30px;
  padding-top: 20px;
}

.main {
  margin-top: 80px;
  margin-left: 80px;
  margin-right: 80px;
}
</style>
