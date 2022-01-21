// scope = lugar donde viven las variables
var name = "david";
var message = "hi";

function sayHi() {
  var name = "laura";
  var i = 0
  console.log(message + " " + name);
}

sayHi();
console.log(name);
