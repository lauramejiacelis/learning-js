// GOOD
console.log(sum(1, 2));

function sum(a, b) {
  return a + b;
}

// BAD
console.log(rest(1, 2));

var rest = function (a, b) {
  return a - b;
};
