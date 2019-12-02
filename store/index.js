import { vuexfireMutations } from 'vuexfire'

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
  setBooks({ commit }, books) {
    commit('setBooks', books)
  }
}

export const getters = {
  getBooks: (state) => state.books
}
