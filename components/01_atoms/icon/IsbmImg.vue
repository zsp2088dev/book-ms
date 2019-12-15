<template>
  <div class="isbm-img">
    <img :src="src" alt="book-icon" width="300" height="300" />
  </div>
</template>

<script>
export default {
  name: 'IsbmImg',
  computed: {
    src() {
      return require(`@/assets/images/isbn.svg`)
    }
  }
}
</script>
