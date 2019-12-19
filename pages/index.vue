<template>
  <div class="app-home">
    <div class="app-home-top">
      <el-button @click="dialog = true" icon="el-icon-delete" plain circle />
      <book-search-input @keyword="createFilteredBooks" />
      <sign-out-button />
      <el-dialog
        :visible.sync="dialog"
        :before-close="deleteBooks"
        title="書籍削除の確認"
        width="30%"
      >
        <span>書籍を削除しますか？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="deleteBooks" type="primary">削除</el-button>
          <el-button @click="dialog = false">キャンセル</el-button>
        </span>
      </el-dialog>
    </div>
    <book-card-list
      :books="filteredBooks"
      @checkBooks="setCheckedBooks"
      class="app-home-book-card-list"
    />
    <plus-button class="app-home-plus-button" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BookCardList from '../components/03_organisms/scoped/BookCardList'
import BookSearchInput from '../components/02_molecules/form/BookSearchInput'
import SignOutButton from '../components/01_atoms/button/SignOutButton'
import PlusButton from '../components/01_atoms/button/PlusButton'
import { db } from '~/plugins/firebase'
import { getFilteredBooks } from '~/plugins/books'

export default {
  name: 'AppHome',
  components: {
    PlusButton,
    SignOutButton,
    BookSearchInput,
    BookCardList
  },
  data() {
    return {
      filteredBooks: [],
      checkedBooks: [],
      dialog: false
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
      this.dialog = false

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

.app-home-plus-button {
  position: fixed;
  right: 35px;
  bottom: 35px;
}
</style>
