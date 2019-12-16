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

export const getBookFromOpenBD = (isbn) => {
  const url = `https://api.openbd.jp/v1/get?isbn=${isbn}`
  return axios.get(url).then((r) => {
    if (!r.data.length) {
      return new Error('Unexpected ISBN')
    }

    const book = r.data[0].summary

    // 取得した日付に関する操作
    const pubDate = book.pubdate
    let publicationDate
    if (book.pubdate.match(/-/)) {
      const includeDate = pubDate.split('-').length - 1 === 2
      if (includeDate) {
        publicationDate = pubDate.replace(/(\d+)-(\d+)-(\d+)/g, '$1年$2月$3日')
      } else {
        publicationDate = pubDate.replace(/(\d+)-(\d+)/g, '$1年$2月')
      }
    } else {
      const year = pubDate.slice(0, 4) + '年'
      const month = pubDate.slice(5, 7) + '月'
      const date = pubDate.slice(8, 10) ? pubDate.slice(8, 10) + '日' : ''
      publicationDate = year + month + date
    }

    return {
      id: book.isbn,
      title: book.title,
      author: book.author.split('／')[0],
      date: publicationDate
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
