<template>
  <el-container class="app">
    <el-header class="app-el-header">
      <app-header />
    </el-header>
    <el-main class="app-el-main">
      <nuxt />
    </el-main>
  </el-container>
</template>

<script>
import AppHeader from '../components/03_organisms/globals/AppHeader'
export default {
  components: { AppHeader }
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
  margin-left: 80px;
  margin-right: 80px;
}
</style>
