var products = [
  {
    name: "banana",
    category: "fruit",
    price: 300,
    discount: false,
  },
  {
    name: "ketchup",
    category: "sauce",
    price: 300,
    discount: true,
  },
  {
    name: "apple",
    category: "fruit",
    price: 150,
    discount: true,
  },
  {
    name: "cheese",
    category: "dairy",
    price: 2000,
    discount: false,
  },
];

function getFruits(items) {
  var filtered = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item.category === "fruit") {
      filtered.push(item);
    }
  }
  return filtered;
}

function discountedProducts(items) {
  var filtered = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item.discount) {
      filtered.push(item);
    }
  }
  return filtered;
}

function findProductByName(items, productName) {
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item.name === productName) {
      return item;
    }
  }
  return null;
}

function increasePrice(items, amount) {
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    item.price += amount;
  }
  return items
}

console.log(getFruits(products));
console.log(discountedProducts(products));
console.log(findProductByName(products, "cheese"));
console.log(increasePrice(products, 1000));
