import Fuse from 'fuse.js'
import axios from 'axios'

export const getFilteredBooks = (keyword, books) => {
  if (keyword.length === 0) {
    return books
  }

  const options = {
    threshold: 0.3,
    keys: ['title', 'author', 'tags']
  }
  return new Fuse(books, options).search(keyword)
}

export const getBookFromGoogle = (isbn) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
  return axios.get(url).then((r) => {
    if (r.data.totalItems !== 1) {
      return new Error('Unexpected ISBN')
    }

    const book = r.data.items[0].volumeInfo

    return {
      title: book.title,
      subtitle: book.subtitle,
      author: book.authors[0],
      date: book.publishedDate
    }
  })
}
