var input = document.getElementById("input");
var button = document.getElementById("button");
var list = document.getElementById("list");

function buttonClick() {
  var text = input.value;
  var li = document.createElement("li"); // <li></li>
  li.classList.add("list-item");
  li.innerText = text; // <li>text</li>
  list.appendChild(li);
  input.value = "";
}

button.addEventListener("click", buttonClick);

button.removeEventListener("click", buttonClick);
