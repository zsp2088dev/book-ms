<template>
  <div class="container">
    <p>Init</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { db } from '~/plugins/firebase'

export default {
  computed: {
    ...mapGetters({ books: 'getBooks' })
  },
  created() {
    this.$store.dispatch('setBooks', db.collection('books'))
  },
  methods: {
    ...mapActions(['setBooks'])
  }
}
</script>
