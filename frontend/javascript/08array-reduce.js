var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 2n
var result = nums
  .filter(function (num) {
    return num > 3;
  })
  .map(function (num) {
    return num + 1;
  });

var result2 = nums.reduce(function (acc, value) {
  if (value > 3) {
    acc.push(value + 1);
  }
  return acc;
}, []);

console.log(result2);
