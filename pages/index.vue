<template>
  <div class="container">
    <div class="search">
      <el-input
        v-model="input"
        placeholder="タイトル、著者名、タグで検索"
        class="header-search-input"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div class="books">
      <el-row :gutter="20">
        <el-col
          v-for="(book, index) in filteredBooks"
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Fuse from 'fuse.js'
import AppBook from '../components/AppBook'
import { db } from '~/plugins/firebase'

export default {
  components: { AppBook },
  data() {
    return {
      input: ''
    }
  },
  computed: {
    ...mapGetters({ books: 'getBooks' }),
    filteredBooks() {
      if (this.input.length === 0) {
        return this.books
      }

      const options = {
        keys: ['title', 'author', 'tags']
      }
      return new Fuse(this.books, options).search(this.input)
    }
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

.search {
  width: 50%;
  text-align: center;
  margin: 0 auto;
}

.books {
  margin-top: 50px;
}
</style>
