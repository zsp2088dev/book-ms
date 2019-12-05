<template>
  <div class="book-card">
    <el-card>
      <book-icon />
      <book-title-text :title="title" class="book-card-title" />
      <book-author-text :author="author" class="book-card-author" />
      <book-price-text :price="price" class="book-card-price" />
      <book-tag
        v-for="(tag, index) in tags"
        :key="index"
        :tag="tag"
        class="book-card-tag"
      />
    </el-card>
  </div>
</template>

<script>
import BookIcon from '../../01_atoms/icon/BookIcon'
import BookTitleText from '../../01_atoms/text/BookTitleText'
import BookAuthorText from '../../01_atoms/text/BookAuthorText'
import BookTag from '../../01_atoms/tag/BookTag'
import BookPriceText from '../../01_atoms/text/BookPriceText'
export default {
  name: 'BookCard',
  components: {
    BookPriceText,
    BookTag,
    BookAuthorText,
    BookTitleText,
    BookIcon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.book-card-title {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.book-card-author {
  margin-bottom: 0.25rem;
}

.book-card-price {
  margin-bottom: 0.5rem;
}

.book-card-tag {
  margin: 0.25rem;
}
</style>
