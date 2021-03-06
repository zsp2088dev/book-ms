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

const convertDate = (raw) => {
  let date
  if (!raw.match(/-/)) {
    const y = raw.slice(0, 4) + '-'
    const m = raw.slice(4, 6) + '-'
    const d = raw.slice(6, 8) ? raw.slice(6, 8) : ''
    date = y + m + d
  } else {
    date = raw
  }

  return new Date(date)
}

const getBookFromGoogle = (isbn) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
  return axios.get(url).then((r) => {
    if (r.data.totalItems !== 1) {
      return false
    }

    const book = r.data.items[0].volumeInfo
    return {
      id: book.industryIdentifiers.slice(-1)[0].identifier,
      title: book.title,
      author: book.authors[0],
      date: convertDate(book.publishedDate)
    }
  })
}

const getBookFromOpenBD = (isbn) => {
  const url = `https://api.openbd.jp/v1/get?isbn=${isbn}`
  return axios.get(url).then((r) => {
    if (!r.data[0]) {
      return false
    }

    const book = r.data[0].summary

    return {
      id: book.isbn,
      title: book.title,
      author: book.author.split('／')[0],
      date: convertDate(book.pubdate)
    }
  })
}

export const getBookFromAPI = async (isbn) => {
  const googleBookResult = await getBookFromGoogle(isbn)
  if (googleBookResult) {
    return googleBookResult
  }

  const openBDResult = await getBookFromOpenBD(isbn)
  if (openBDResult) {
    return openBDResult
  }
}

export const dateToString = (date) => {
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return `${y}年${m}月${d}日`
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
