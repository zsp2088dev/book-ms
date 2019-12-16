import Fuse from 'fuse.js'
import axios from 'axios'

export const getFilteredBooks = (keyword, books) => {
  if (keyword.length === 0) {
    return books
  }

  const options = {
    threshold: 0.3,
    keys: ['title', 'author']
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
      id: r.data.items[0].id,
      title: book.title,
      subtitle: book.subtitle ? book.subtitle : '',
      author: book.authors[0],
      date: book.publishedDate
    }
  })
}

export const buildCheckedBooks = (checkedBooks, book) => {
  const setCheckedBooks = new Set(checkedBooks)

  if (book.checked) {
    setCheckedBooks.add(book.id)
  } else {
    setCheckedBooks.delete(book.id)
  }

  return Array.from(setCheckedBooks)
}
