// window.lastname = "Mejia"

var button = document.getElementById("button");

// subscribir a un evento

var flag = false;
var count = 0;

button.addEventListener("click", function (event) {
  button.classList = "";
  button.classList.add(flag ? "red" : "blue");
  button.innerText = count;
  count++;
  flag = !flag;
});

console.log(button);
