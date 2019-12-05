import { firestoreAction, vuexfireMutations } from 'vuexfire'

export const state = () => ({
  books: [],
  username: null
})

export const mutations = {
  ...vuexfireMutations,
  setBooks(state, books) {
    state.books = books
  },
  setUsername(state, username) {
    state.username = username
  }
}

export const actions = {
  setBooks: firestoreAction((context, ref) => {
    context.bindFirestoreRef('books', ref).then(() => {})
  }),
  setUsername({ commit }, username) {
    commit('setUsername', username)
  }
}

export const getters = {
  getBooks: (state) => state.books,
  getUserName: (state) => state.username,
  isAuthenticated: (state) => !!state.username
}
