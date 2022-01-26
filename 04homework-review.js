function isPalindrom(word) {
  var length;

  // calcular hasta donde voy
  if (word % 2 === 0) {
    length = word.length / 2; // par
  } else {
    length = (word.length - 1) / 2; // impar
  }

  for (var i = 0; i < length; i++) {
    var first = word.charAt(i);
    var last = word.charAt(word.length - 1 - i);
    
    if (first !== last) {
      return false;
    }
  }
  return true;
}


console.log(isPalindrom("anilina"));
