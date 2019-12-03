<template>
  <el-container class="app">
    <el-header>
      <div class="header">
        <h1>Book MS</h1>
      </div>
    </el-header>

    <el-main class="main">
      <nuxt />
    </el-main>
  </el-container>
</template>

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
  border-bottom-color: rgb(220, 223, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

.main {
  margin-top: 30px;
  margin-left: 80px;
  margin-right: 80px;
}
</style>
