var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getTotal(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum
}

console.log(getTotal(arr));

/*
1. inputs (arr) y outputs (num)
2. recorrerlo todo?  si
3. operador? sum
4. estrategía? inicio en 0 y voy sumando el siguiente (accumulation)
5. resultado?  sum of all numbers
*/
