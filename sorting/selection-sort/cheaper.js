function cheaper(products, initialPosition) {
  let cheaper = initialPosition;

  for (let current = initialPosition; current < products.length; current++) {
    if (products[current].price < products[cheaper].price) {
      cheaper = current;
    }
  }

  return cheaper;
}

module.exports = cheaper;
