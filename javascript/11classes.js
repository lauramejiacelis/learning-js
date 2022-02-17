// This dentro de una clase apunta a la instancia que se va a crear (un objeto)

// Clase - PascalCase
function Human() {
  this.species = "human";
}

Human.prototype.live = function () {
  console.log(`I'm human and living`);
};

function Person(name, lastname) {
  Human.call(this); // conecta las propiedades de Human a Person
  this.name = name;
  this.lastname = lastname;
}

Object.setPrototypeOf(Person.prototype, Human.prototype); // conecta el prototype de Person a el de Human

Person.prototype.sayHi = function () {
  console.log(`Hi my name is ${this.name}`);
};

Person.prototype.age = 20;

// instance
var david = new Person("David", "Sttivend");
var laura = new Person("Laura", "Mejia");

console.log(laura);
console.log(david);
laura.sayHi();
david.live();
