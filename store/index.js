import { firestoreAction, vuexfireMutations } from 'vuexfire'

export const state = () => ({
  books: []
})

export const mutations = {
  ...vuexfireMutations,
  setBooks(state, books) {
    state.books = books
  }
}

export const actions = {
  setBooks: firestoreAction((context, ref) => {
    context.bindFirestoreRef('books', ref).then(() => {})
  })
}

export const getters = {
  getBooks: (state) => state.books
}
