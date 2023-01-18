var arr = [1, 2, 3, 4];

var [one, ...nums] = arr;

console.log(one);

console.log(nums);

// old way
function test() {
  console.log(arguments[0]);
}

test("hola");

// new way
function sum(a, ...nums) {
  console.log("params", nums);
  return nums.reduce((acc, value) => {
    return acc + value;
  }, 0);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
