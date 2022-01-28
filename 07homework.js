
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
/**
 * filtrar los productos por el precio > 200
 * buscar si existe un producto con el precio de 1500
 * crear un arreglo con los productos pero el nombre en mayuscula todo
 * calcular cual es el total de comprar cada producto 1 vez
 */

var price = products.filter(function (product) {
  return product.price > 200;
})

var price1500 = products.find(function (product) {
  return product.price === 1500;
})

var Upper = products.map(function (product) {
  return product.name.toUpperCase();
})

var sum = products.reduce(function (acc, product) {
  return acc + product.price;
},0)

console.log(price);
console.log(price1500);
console.log(Upper);
console.log(sum);