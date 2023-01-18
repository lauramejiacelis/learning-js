function sum(a, b) {
  return a + b;
}

module.exports; // {}

module.exports.PI = 3.14; // { PI: 3.14 }

module.exports = {
  // { sum , a }
  sum,
  a: 100,
};
