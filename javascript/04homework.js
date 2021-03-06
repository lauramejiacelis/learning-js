// Return true/false if the word is palindrome
// str.charAt(index)

/*
 * anilina
 * anitalavalatina
 */

function isPalindrom(word) {
  var wordOrder = "";
  var wordReverse = "";

  for (let i = 0; i < word.length; i++) {
    var y = word.length - 1;
    wordReverse = wordReverse + word.charAt(y - i);
  }

  if (word === wordReverse) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrom("anilina")); // (arr.length - 1) / 2
console.log(isPalindrom("arbol"));
console.log(isPalindrom("anitalavalatina"));
console.log(isPalindrom("anna")); // arr.length / 2
console.log(isPalindrom("luzazul"));
console.log(isPalindrom("rana"));

/*
 * y = arr.length - 1
 * 0 / y
 * 1 / y - 1
 * 2 / y - 2
 * i / y - i
 */

/*
 * arbol
 * lobra
 * arbol === lobra ?
 */

/*
1. inputs (word) y outputs (true/false)
2. recorrerlo todo?  no, se recorre hasta la mitad
3. operador? ===
4. estrategía? comparar la primera y la última letra hasta llegar al medio
5. resultado?  (true/false)
*/
