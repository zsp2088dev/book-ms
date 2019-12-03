<template>
  <div class="app-book">
    <el-card>
      <img :src="path" alt="icon" class="image" width="100" height="100" />
      <p>{{ title }}</p>
      <p>{{ author }}</p>
      <p>{{ price }}円</p>

      <div style="text-align: left">
        <el-tag
          v-for="(tag, index) in tags"
          :key="index"
          effect="dark"
          class="tag"
        >
          {{ tag }}
        </el-tag>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AppBook',
  props: {
    title: {
      type: String,
      default: 'Default Title'
    },
    author: {
      type: String,
      default: 'Default Author'
    },
    price: {
      type: Number,
      default: 1000
    },
    tags: {
      type: Array,
      default: () => ['Tag1', 'Tag2', 'Tag3']
    }
  },
  computed: {
    path() {
      return require(`@/assets/images/note.svg`)
    }
  }
}
</script>

<style scoped>
.app-book {
  text-align: center;
  width: 250px;
}

.tag {
  margin: 0.25rem;
}
</style>
