<template>
  <div class="book-card">
    <el-card class="book-el-card" shadow="hover">
      <book-icon class="book-card-icon" />
      <book-title-text :title="title" class="book-card-title" />
      <book-author-text :author="author" class="book-card-author" />
      <book-publication-date-text
        :date="date"
        class="book-card-publication-date"
      />
    </el-card>
  </div>
</template>

<script>
import BookIcon from '../../01_atoms/icon/BookIcon'
import BookTitleText from '../../01_atoms/text/BookTitleText'
import BookAuthorText from '../../01_atoms/text/BookAuthorText'
import BookPublicationDateText from '../../01_atoms/text/BookPublicationDateText'

export default {
  name: 'BookCard',
  components: {
    BookPublicationDateText,
    BookAuthorText,
    BookTitleText,
    BookIcon
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.book-el-card {
  height: 430px;
}

.book-card-icon {
  text-align: center;
}

.book-card-title {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.book-card-author {
  margin-bottom: 2px;
}

.book-card-publication-date {
  margin-bottom: 2px;
}
</style>
