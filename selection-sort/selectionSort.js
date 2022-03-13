const books = require("./bookList");
const getCheaperBook = require("./cheaper");

for (let current = 0; current < books.length - 1; current++) {
  const cheaper = getCheaperBook(books, current);

  const currentBook = books[current];
  const cheaperBook = books[cheaper];

  books[current] = cheaperBook;
  books[cheaper] = currentBook;
}

console.log(books);
