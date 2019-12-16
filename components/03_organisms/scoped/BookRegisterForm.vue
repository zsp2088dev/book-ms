<template>
  <div class="book-register-form">
    <isbm-img />
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item label="ISBN" prop="isbn">
        <el-input
          v-model="form.isbn"
          placeholder="ハイフンなしで10桁もしくは13桁入力してください"
        />
      </el-form-item>
    </el-form>

    <el-button @click="submit('form')">登録</el-button>
  </div>
</template>

<script>
import { db } from '../../../plugins/firebase'
import IsbmImg from '../../01_atoms/icon/IsbmImg'
import { getBookFromAPI } from '../../../plugins/books'

export default {
  name: 'BookRegisterForm',
  components: { IsbmImg },
  data() {
    const validateISBN = (rule, value, callback) => {
      if (!(value.length === 10 || value.length === 13)) {
        callback(new Error('ISBNは10桁もしくは13桁です'))
      }
      callback()
    }
    return {
      rules: {
        isbn: [{ validator: validateISBN, trigger: 'blur' }]
      },
      form: {
        isbn: ''
      }
    }
  },
  methods: {
    submit(form) {
      this.$refs[form].validate((valid) => {
        if (!valid) {
          return false
        }
        getBookFromAPI(this.form.isbn).then((book) => {
          db.collection('books')
            .doc(book.id)
            .set(book)
            .then(() => {
              this.$router.push('/')
            })
        })
      })
    }
  }
}
</script>

<style>
.book-register-form {
  text-align: center;
}
</style>
