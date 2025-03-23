/**
 * @file main.js
 * @author Massimo Musso
 * @description This script defines an array of books and logs whether they have been read or not.
 */

/**
 * Represents a book.
 * @typedef {Object} Book
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 * @property {boolean} alreadyRead - Indicates whether the book has been read.
 */

/**
 * An array of books.
 * @type {Book[]}
 */
const books = [
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    alreadyRead: true,
  },
  {
    title: '1984',
    author: 'George Orwell',
    alreadyRead: true,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    alreadyRead: false,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    alreadyRead: true,
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    alreadyRead: false,
  },
];

/**
 * Logs whether each book has been read or not.
 * @param {Book[]} booksArray - The array of books.
 */
function logBooks(booksArray) {
  booksArray.forEach(book => {
    if (book.alreadyRead) {
      console.log(`You already read "${book.title}" by ${book.author}`);
    } else {
      console.log(`You still need to read "${book.title}" by ${book.author}`);
    }
  });
}

// Call the function to log book information
logBooks(books);
