// closure - factory
// Functional programming

function makeCounter() {
  var count = 0;
  return function counter() {
    count++;
    return count;
  };
}

var counter = makeCounter(); // fn()

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
