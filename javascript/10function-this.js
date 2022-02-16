// Global = window

// This function: el this apunta al objeto que tengo a la izquierda de la función en el momento de la EJECUCIÓN
var obj = {
  name: "laura",
  sayHi: function () {
    console.log(`Hi my name is ${this.name}`);
  },
};

// Ejecución
console.log(obj.sayHi());

function test(cb) {
  cb(); // Ejecución - no tengo un objeto
}

// callback
test(obj.sayHi);
// Nota: si la función no tiene un objeto al lado izquierdo, el this apunta al window (depende de "use strict" o no)

console.log(document);
