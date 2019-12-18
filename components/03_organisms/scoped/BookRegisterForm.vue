<template>
  <div class="book-register-form">
    <isbm-img class="book-register-form-image" />

    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="ISBN" prop="isbn">
        <el-input v-model="form.isbn" placeholder="ハイフンなし" />
      </el-form-item>

      <el-form-item>
        <el-button @click="searchBook" plain>ISBNコードから検索</el-button>
      </el-form-item>

      <el-form-item label="タイトル" prop="title">
        <el-input v-model="form.title" />
      </el-form-item>

      <el-form-item label="著者" prop="author">
        <el-input v-model="form.author" />
      </el-form-item>

      <el-form-item label="出版日" prop="date">
        <el-date-picker v-model="form.date" type="date" />
      </el-form-item>

      <el-form-item>
        <el-button @click="submit('form')">登録</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { db } from '../../../plugins/firebase'
import IsbmImg from '../../01_atoms/icon/IsbmImg'
import { dateToString, getBookFromAPI } from '../../../plugins/books'

export default {
  name: 'BookRegisterForm',
  components: { IsbmImg },
  data() {
    const validateTitle = (rule, value, callback) => {
      if (!value) {
        callback(new Error('タイトルを入力してください'))
      }
      callback()
    }
    const validateAuthor = (rule, value, callback) => {
      if (!value) {
        callback(new Error('著者を入力してください'))
      }
      callback()
    }
    const validateDate = (rule, value, callback) => {
      if (!value) {
        callback(new Error('出版日を入力してください'))
      }
      callback()
    }
    const validateISBN = (rule, value, callback) => {
      if (!(value.length === 10 || value.length === 13)) {
        callback(new Error('ISBNは10桁もしくは13桁です'))
      }
      callback()
    }
    return {
      rules: {
        isbn: [{ validator: validateISBN, trigger: 'blur' }],
        title: [{ validator: validateTitle, trigger: 'blur' }],
        author: [{ validator: validateAuthor, trigger: 'blur' }],
        date: [{ validator: validateDate, trigger: 'blur' }]
      },
      form: {
        isbn: '',
        title: '',
        author: '',
        date: ''
      }
    }
  },
  methods: {
    submit(form) {
      this.$refs[form].validate((valid) => {
        if (!valid) {
          return false
        }
        const bookRef = {
          id: this.form.isbn,
          title: this.form.title,
          author: this.form.author,
          date: dateToString(this.form.date)
        }

        db.collection('books')
          .doc(this.form.isbn)
          .set(bookRef)
          .then(() => {
            this.$router.push('/')
          })
      })
    },
    searchBook() {
      getBookFromAPI(this.form.isbn).then((book) => {
        this.form.title = book.title
        this.form.author = book.author
        this.form.date = book.date
      })
    }
  }
}
</script>

<style>
.book-register-form-image {
  text-align: center;
  margin-bottom: 30px;
}
</style>
