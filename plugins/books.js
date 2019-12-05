import Fuse from 'fuse.js'

const getFilteredBooks = (keyword, books) => {
  if (keyword.length === 0) {
    return books
  }

  const options = {
    keys: ['title', 'author', 'tags']
  }
  return new Fuse(books, options).search(keyword)
}

export { getFilteredBooks }
