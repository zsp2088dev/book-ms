<template>
  <div class="book-card">
    <el-card :style="styles" class="book-el-card" shadow="hover">
      <el-checkbox v-model="checked" @change="checkedBook" />
      <book-icon class="book-card-icon" />
      <book-title-text :title="title" class="book-card-title" />
      <book-author-text :author="author" class="book-card-author" />
      <book-publication-date-text
        :date="date"
        class="book-card-publication-date"
      />
      <book-username-text :username="username" class="book-card-username" />
    </el-card>
  </div>
</template>

<script>
import BookIcon from '../../01_atoms/icon/BookIcon'
import BookTitleText from '../../01_atoms/text/BookTitleText'
import BookAuthorText from '../../01_atoms/text/BookAuthorText'
import BookPublicationDateText from '../../01_atoms/text/BookPublicationDateText'
import BookUsernameText from '../../01_atoms/text/BookUsernameText'

export default {
  name: 'BookCard',
  components: {
    BookUsernameText,
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
    },
    username: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      checked: false
    }
  },
  computed: {
    styles() {
      if (this.checked) {
        return {
          '--color': '#ecf5ff'
        }
      } else {
        return {
          '--color': '#ffffff'
        }
      }
    }
  },
  methods: {
    checkedBook() {
      this.$emit('checkBook', { id: this.id, checked: this.checked })
    }
  }
}
</script>

<style scoped>
.book-el-card {
  --color: 'ffffff';
  background: var(--color);
}

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
