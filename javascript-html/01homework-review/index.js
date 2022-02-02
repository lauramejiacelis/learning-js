var square = document.getElementById("square");
var button = document.getElementById("button");

function getRandomInRange(max, min) {
  return Math.random() * (max - min) + min;
}

//var colors = ["red", "green", "yellow", "cyan", "blue"];

button.addEventListener("click", function () {
  var width = getRandomInRange(500, 1);
  var height = getRandomInRange(500, 1);
  var red = getRandomInRange(255, 0);
  var green = getRandomInRange(255, 0);
  var blue = getRandomInRange(255, 0);

  //var index = Math.floor(getRandomInRange(4, 0));
  //var color = colors[index];

  square.style.width = width + "px";
  square.style.height = height + "px";
  square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  //square.style.backgroundColor = color;
});
