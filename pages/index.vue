<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col
        v-for="(book, index) in books"
        :key="index"
        :span="6"
        :offset="0"
        class="col"
      >
        <app-book
          :title="book.title"
          :author="book.author"
          :price="book.price"
          :tags="book.tags"
          class="app-book"
        ></app-book>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppBook from '../components/AppBook'
import { db } from '~/plugins/firebase'

export default {
  components: { AppBook },
  computed: {
    ...mapGetters({ books: 'getBooks' })
  },
  created() {
    this.$store.dispatch('setBooks', db.collection('books'))
  },
  methods: {
    ...mapActions(['setBooks'])
  }
}
</script>

<style>
.col {
  margin-bottom: 20px;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
}
</style>
