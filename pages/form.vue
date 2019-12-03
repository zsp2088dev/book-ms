<template>
  <div class="app-form">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
    >
      <el-form-item label="Title" prop="title">
        <el-input v-model="ruleForm.title" />
      </el-form-item>

      <el-form-item label="Author" prop="author">
        <el-input v-model="ruleForm.author" />
      </el-form-item>

      <el-form-item label="Price" prop="price">
        <el-input v-model.number="ruleForm.price" />
      </el-form-item>

      <el-form-item label="Tags" prop="tags">
        <el-input v-model="ruleForm.tags" />
      </el-form-item>

      <el-form-item>
        <el-button @click="submitForm('ruleForm')" type="primary"
          >Submit</el-button
        >
        <el-button @click="resetForm('ruleForm')">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
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
      if (value.split(' ').length > 5) {
        callback(new Error('タグの上限は5つです'))
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
          alert('submit!')
        } else {
          return false
        }
      })
    },
    resetForm(form) {
      this.$refs[form].resetFields()
    }
  }
}
</script>

<style scoped>
.app-form {
  width: 500px;
}
</style>
