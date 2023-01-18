// IIFE
var module = (function () {
  var name = "david";

  var privada = 10;

  function sum(a, b) {
    return a + b + privada;
  }

  return { name, sum };
})();

