<template>
  <div class="book-search-input">
    <el-input v-model="inputKeyword" :placeholder="text">
      <el-button slot="append" icon="el-icon-search" />
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'BookSearchInput',
  data() {
    return {
      input: '',
      text: 'タイトル、著者名、タグで検索'
    }
  },
  computed: {
    inputKeyword: {
      get() {
        return this.input
      },
      set(keyword) {
        this.input = keyword
        this.$emit('keyword', keyword)
      }
    }
  }
}
</script>

<style scoped>
.book-search-input {
  text-align: center;
}
</style>
