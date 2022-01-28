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

var fruits = products.filter(function (product) {
  return product.category === "fruit";
});

var discounted = products.filter(function (product) {
  return product.discount;
});

var found = products.find(function (product) {
  return product.name === "cheese";
});

var increased = products.map(function (product) {
  product.price += 1000;
  return product;
});

console.log(fruits);
console.log(discounted);
console.log(found);
console.log(increased);
