const books = require("./bookList");

function insertionSort(list) {
  for (let current = 0; current < list.length; current++) {
    let check = current;

    while (check > 0 && list[check].price < list[check - 1].price) {
      const checkItem = list[check];
      const previousItem = list[check - 1];

      list[check] = previousItem;
      list[check - 1] = checkItem;

      check--;
    }
  }

  console.log(list);
}

insertionSort(books);
