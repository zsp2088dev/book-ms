<template>
  <div class="book-register-form">
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item label="ISBN" prop="isbn">
        <el-input v-model="form.isbn" />
      </el-form-item>
    </el-form>

    <el-button @click="submit('form')">登録</el-button>
  </div>
</template>

<script>
import { getBookFromGoogle } from '../../../plugins/books'
import { db } from '../../../plugins/firebase'

export default {
  name: 'BookRegisterForm',
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
      this.$refs[form].validate(async (valid) => {
        if (!valid) {
          return false
        }
        await getBookFromGoogle(this.form.isbn).then((book) => {
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
