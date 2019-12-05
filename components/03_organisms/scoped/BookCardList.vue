<template>
  <div class="book-card-list">
    <el-row :gutter="20">
      <el-col
        v-for="(book, index) in books"
        :key="index"
        :span="6"
        :offset="0"
        class="book-card-list-col"
      >
        <book-card
          :title="book.title"
          :author="book.author"
          :price="book.price"
          :tags="book.tags"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BookCard from '../../02_molecules/card/BookCard'
export default {
  name: 'BookCardList',
  components: { BookCard },
  props: {
    books: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped></style>
