function findNemo(word) {
  var words = word.split(" ");
  var index = words.indexOf("Nemo") + 1;
  return index > 0 ? `I found Nemo at ${index}!` : "I can't find Nemo :(";
}

console.log(findNemo("I am finding Nemo !"));
console.log(findNemo("Nemo is me"));
console.log(findNemo("I Nemo am"));
console.log(findNemo("Pedro"));
