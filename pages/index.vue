<template>
  <div class="container">
    <el-row>
      <el-col :span="3" v-for="(book, index) in books" :offset="2">
        <app-book
          :key="index"
          :title="book.title"
          :author="book.author"
          :price="book.price"
          :tags="book.tags"
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
