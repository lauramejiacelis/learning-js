/*
    write a function that returns true/false if the element is present in the array
*/
// index = 0-6
// length = 7
var arr = [215, 1, 3, 5, 9, 15, 100];

var num = 30;

function isPresent(nums, numToFind) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === numToFind) {
      return true;
    }
  }
  return false;
}

console.log(isPresent(arr, num));
