var arr = [1, 2, 3, 4, 5];

function loop(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    fn(arr[i]);
  }
}

loop(arr, function (num) {
  console.log(num);
});

loop(arr, function (num) {
  console.log(num + 1);
});

// recorrer y ya
// función que se pasa como parametro es un callback
arr.forEach(function (element, index, array) {
  console.log(element);
});

// me retorna un nuevo arreglo, con las modificaciones que le especifique en el callback
var mapArray = arr.map(function (element, index, array) {
  return element + 1;
});

console.log(mapArray);

var filteredArray = arr.filter(function (element, index, array) {
  return element >= 4; // predicado
});

console.log(filteredArray);

var found = arr.find(function (num) {
  return num === 2; // predicado
});

console.log(found);

var doesAllApply = arr.every(function (item) {
  return item > 0; // predicado
});

console.log(doesAllApply);

var someElementsApply = arr.some(function (element) {
  return element < 0; // predicado
});

console.log(someElementsApply);

var total = arr.reduce(function (acc, value) {
  return acc + value;
}, 5); // callback y valor inicial = 0

console.log(total);
