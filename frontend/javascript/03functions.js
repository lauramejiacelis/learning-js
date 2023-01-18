/*
    function is a wildcard
    name is whatever you want
    parameters are the variables that are enclosed by () and they are optional, and followed by commas,
    parameters can be named how ever you like
    function may return or not
*/

// declaration
function sum(a, b) {
  return a + b;
}

var num1 = 1
// execution
var result = sum(num1, 2);

console.log(result);
console.log(sum(10, 10)); // console.log(20)
console.log(sum(1,sum(1,1)))

// declaration
function greeting() {
  console.log("Hi from javascript");
}

// execution
greeting();
