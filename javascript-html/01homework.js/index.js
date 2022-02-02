/**
 * Crear un cuadradito (puede ser un div), que cuando le de click
 * cambie de alto, ancho y tambien el background-color
 */

var square = document.getElementById("square");
var button = document.getElementById("button");

var flag = false;
var count = 0;
button.addEventListener("click", function (event) {
  square.classList = "";
  square.classList.add(flag ? "square1" : "square2");
  flag = !flag;
  count++;
  console.log(count);
});
