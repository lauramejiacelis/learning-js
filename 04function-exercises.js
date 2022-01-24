var arr = [100, 15, 2, 103, 65, 30, 54];

// input (arr) / output (num)
function findMax(arr) {
  var num = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
  }
  return num;
}

console.log(findMax(arr));
