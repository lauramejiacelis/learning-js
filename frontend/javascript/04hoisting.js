// Hoisting

// Asignations remain in line
message = "good morning my friend";

// Execution remain in line
console.log(message);

// Declaration are hoisted
var message;

// Declaration are hoisted
function sum(a, b) {
  return a + b;
}

/**
 * Hoisting Result
    var message;
    function sum(a, b) {
    return a + b;
    }

    message = "good morning my friend";
    console.log(message);
 */
