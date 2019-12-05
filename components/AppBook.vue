<template>
  <div class="app-book">
    <el-card class="card" shadow="hover">
      <div class="app-book-image">
        <img :src="path" alt="icon" width="150" height="150" />
      </div>
      <div class="app-book-contents">
        <p class="app-book-title">{{ bookTitle }}</p>
        <p class="app-book-author">{{ author }}</p>
        <p class="app-book-price">￥ {{ toLocalePrice }}</p>
      </div>
      <div style="text-align: left" class="app-book-tags">
        <el-tag
          v-for="(tag, index) in tags"
          :key="index"
          effect="plain"
          class="app-book-tag"
        >
          #{{ tag }}
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
      return require(`@/assets/images/book.svg`)
    },
    toLocalePrice() {
      return this.price.toLocaleString()
    },
    bookTitle() {
      if (this.title.length < 24) {
        return this.title
      }
      return this.title.substring(0, 22) + ' ...'
    }
  }
}
</script>

<style scoped>
.app-book {
  width: 340px;
}

.app-book-image {
  text-align: center;
}

.app-book-contents {
  text-align: left;
  height: 200px;
}

.app-book-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.app-book-author {
  color: #606266;
  margin-bottom: 0.5rem;
}

.app-book-price {
  color: #606266;
  margin-bottom: 0.5rem;
}

.app-book-tags {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
}

.app-book-tag {
  margin: 0.25rem;
}
</style>
