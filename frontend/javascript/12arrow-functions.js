// inline arrow function
var sum = (a, b) => a + b; // retorna implicitamente

console.log(sum(1, 2));

// block arrow funciton
var rest = (a) => {
  var b = 100;
  return b - a;
};

console.log(rest(10));

// () => ({ properties })
var result = [{ name: "david" }, { name: "laura" }, { name: "dianita" }].map(
  ({ name }) => ({
    name,
    cool: true,
  })
);

console.log(result);

// () => [ nums ]
var arrFn = (a, b) => [a, b];

console.log(arrFn(3, 3));
