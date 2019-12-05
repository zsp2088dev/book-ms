<template>
  <div class="book-tag">
    <el-tag effect="plain"> #{{ tag }} </el-tag>
  </div>
</template>

<script>
export default {
  name: 'BookTag',
  props: {
    tag: {
      type: String,
      default: ''
    }
  }
}
</script>
