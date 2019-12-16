<template>
  <div class="app-home">
    <div class="app-home-top">
      <register-book-button />
      <book-search-input @keyword="createFilteredBooks" />
      <sign-out-button />
      <el-button @click="deleteBooks" icon="el-icon-delete" plain />
    </div>
    <book-card-list
      :books="filteredBooks"
      @checkBooks="setCheckedBooks"
      class="app-home-book-card-list"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BookCardList from '../components/03_organisms/scoped/BookCardList'
import BookSearchInput from '../components/02_molecules/form/BookSearchInput'
import RegisterBookButton from '../components/01_atoms/button/RegisterBookButton'
import SignOutButton from '../components/01_atoms/button/SignOutButton'
import { db } from '~/plugins/firebase'
import { getFilteredBooks } from '~/plugins/books'

export default {
  name: 'AppHome',
  components: {
    SignOutButton,
    RegisterBookButton,
    BookSearchInput,
    BookCardList
  },
  data() {
    return {
      filteredBooks: [],
      checkedBooks: []
    }
  },
  computed: {
    ...mapGetters({ books: 'getBooks' })
  },
  created() {
    this.setBooks(db.collection('books'))
    this.filteredBooks = getFilteredBooks('', this.books)
  },
  methods: {
    ...mapActions(['setBooks']),
    createFilteredBooks(keyword) {
      this.filteredBooks = getFilteredBooks(keyword, this.books)
    },
    setCheckedBooks(checkedBooks) {
      this.checkedBooks = checkedBooks
    },
    deleteBooks() {
      if (!this.checkedBooks.length) {
        return
      }

      for (const id of this.checkedBooks) {
        db.collection('books')
          .doc(id)
          .delete()
          .then(() => {
            this.$message({
              type: 'primary',
              message: `ISBN: ${id} を削除しました`
            })
          })
      }
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
