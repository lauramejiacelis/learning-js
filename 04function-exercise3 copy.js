var m = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3],
  [9, 1, 15, 3, 8],
];

function getMatrixTotal(matrix) {
  var total = 0;

  for (let i = 0; i < matrix.length; i++) {
    var arr = matrix[i];
    var arrTotal = 0;

    for (let j = 0; j < arr.length; j++) {
      arrTotal = arrTotal + arr[j];
    }
    total = total + arrTotal;
  }

  return total;
}

console.log(getMatrixTotal(m));

/*
1. inputs (matrix) y outputs (total)
2. recorrerlo todo? si
3. operador? sum
4. estrategía? iniciar el total en 0 y recorrer la matrix, recorrer el vector e ir sumando
5. resultado? total 
*/
