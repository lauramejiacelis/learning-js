var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var data = new FormData(form);
  console.log(data.get("name"));
  console.log(data.get("lastname"));
  console.log(Array.from(data.entries()));
});
