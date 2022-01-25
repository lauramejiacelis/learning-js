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
        wordOrder = wordOrder + word.charAt(i);
        wordReverse = wordReverse + word.charAt(y-i);
    }
    console.log(wordOrder);
    console.log(wordReverse);
    if (wordOrder === wordReverse) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrom("anilina")); // (arr.length - 1) / 2 
console.log(isPalindrom("arbol"));
console.log(isPalindrom("anitalavalatina"));
console.log(isPalindrom("anna")); // arr.length / 2

function isPalindrom2(word) {

    var wordOrder = "";
    var wordReverse = "";
    for (let i = 0; i < word.length; i++) {
        var y = word.length - 1;
        
        if (console.log(word.charAt(i)) === console.log(word.charAt(y-i))) {
            
            //return true;
        }
    }
    console.log(wordOrder);
    console.log(wordReverse);
    if (wordOrder === wordReverse) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrom2("anilina")); // (arr.length - 1) / 2 
console.log(isPalindrom2("arbol"));
console.log(isPalindrom2("anitalavalatina"));
console.log(isPalindrom2("anna")); // arr.length / 2

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
