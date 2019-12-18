<template>
  <div class="book-card-list">
    <el-row :gutter="20">
      <el-col
        v-for="book in books"
        :key="book.id"
        :span="6"
        :offset="0"
        class="book-card-list-col"
      >
        <book-card
          :id="book.id"
          :title="book.title"
          :author="book.author"
          :date="book.date"
          :username="book.username"
          @checkBook="checkBooks"
          class="book-card"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BookCard from '../../02_molecules/card/BookCard'
import { buildCheckedBooks } from '../../../plugins/books'
export default {
  name: 'BookCardList',
  components: { BookCard },
  props: {
    books: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      checkedBooks: []
    }
  },
  methods: {
    checkBooks(book) {
      this.checkedBooks = buildCheckedBooks(this.checkedBooks, book)
      this.$emit('checkBooks', this.checkedBooks)
    }
  }
}
</script>

<style scoped>
.book-card {
  margin-bottom: 25px;
}
</style>
