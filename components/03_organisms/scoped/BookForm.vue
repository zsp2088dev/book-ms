<template>
  <div class="book-form">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
    >
      <el-form-item label="タイトル" prop="title">
        <el-input v-model="ruleForm.title" />
      </el-form-item>

      <el-form-item label="著者" prop="author">
        <el-input v-model="ruleForm.author" />
      </el-form-item>

      <el-form-item label="価格" prop="price">
        <el-input v-model.number="ruleForm.price" />
      </el-form-item>

      <el-form-item label="タグ" prop="tags">
        <el-input
          v-model="ruleForm.tags"
          placeholder="スペース区切りで5つまで登録可能 "
        />
      </el-form-item>

      <el-form-item>
        <el-button @click="submitForm('ruleForm')" type="primary"
          >登録</el-button
        >
        <el-button @click="resetForm">キャンセル</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase'

export default {
  name: 'BookForm',
  data() {
    const validateTitle = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('書籍タイトルを入力してください'))
      }
      callback()
    }
    const validateAuthor = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('著者名を入力してください'))
      }
      callback()
    }
    const validatePrice = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('購入価格を入力してください'))
      }
      if (!Number.isInteger(value)) {
        callback(new Error('購入価格を数値で入力してください'))
      } else if (value < 0) {
        callback(new Error('購入価格を0以上の数値で入力してください'))
      } else {
        callback()
      }
    }
    const checkTags = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('タグを1つ以上入力してください'))
      }
      if (value.split(' ').length > 2) {
        callback(new Error('タグの上限は2つです'))
      } else {
        callback()
      }
    }
    return {
      rules: {
        title: [{ validator: validateTitle, trigger: 'blur' }],
        author: [{ validator: validateAuthor, trigger: 'blur' }],
        price: [{ validator: validatePrice, trigger: 'blur' }],
        tags: [{ validator: checkTags, trigger: 'blur' }]
      },
      ruleForm: {
        title: '',
        author: '',
        price: '',
        tags: ''
      }
    }
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          const bookRef = {
            title: this.ruleForm.title,
            author: this.ruleForm.author,
            price: this.ruleForm.price,
            tags: this.ruleForm.tags.split(' ')
          }

          db.collection('books')
            .add(bookRef)
            .then(() => {
              this.$router.push('/')
            })
        } else {
          return false
        }
      })
    },
    resetForm() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped></style>
