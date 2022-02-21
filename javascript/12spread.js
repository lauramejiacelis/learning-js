var product = {
  name: "carrot",
};

var details = {
  price: 1000,
  category: "vegetable",
};

// Old
var newProduct = Object.assign({}, product, details);

console.log(newProduct);

var carrot = {
  property: "key",
  ...product,
  ...details,
};

// new
console.log(carrot);

var nums = [1, 2, 3];

var other = [...nums, 10, 11, ...nums];

console.log(other);
