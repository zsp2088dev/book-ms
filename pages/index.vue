<template>
  <div class="app-home">
    <div class="app-home-top">
      <register-book-button />
      <book-search-input @keyword="createFilteredBooks" />
    </div>
    <book-card-list :books="filteredBooks" class="app-home-book-card-list" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BookCardList from '../components/03_organisms/scoped/BookCardList'
import BookSearchInput from '../components/02_molecules/form/BookSearchInput'
import RegisterBookButton from '../components/01_atoms/button/RegisterBookButton'
import { db } from '~/plugins/firebase'
import { getFilteredBooks } from '~/plugins/books'

export default {
  name: 'AppHome',
  components: { RegisterBookButton, BookSearchInput, BookCardList },
  data() {
    return {
      filteredBooks: []
    }
  },
  computed: {
    ...mapGetters({ books: 'getBooks' })
  },
  created() {
    this.$store.dispatch('setBooks', db.collection('books'))
    this.filteredBooks = this.books
  },
  methods: {
    ...mapActions(['setBooks']),
    createFilteredBooks(keyword) {
      this.filteredBooks = getFilteredBooks(keyword, this.books)
    }
  }
}
</script>

<style scoped>
.app-home-top {
  margin-top: 80px;
  margin-bottom: 80px;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
}
</style>
