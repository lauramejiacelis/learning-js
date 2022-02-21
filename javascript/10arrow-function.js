var obj = {
  name: "Laura",
  sayHi: function sayHi() {
    console.log(`Hi my name is ${this.name}`);
  },
};

obj.sayHi();

// contexto global
this.name = "lala";
console.log(this);

var other = {
  name: "Laura",
  sayHi: () => {
    console.log(`Hi my name is ${this.name}`);
  },
};

other.sayHi();

function Person(name) {
  this.name = name;
  this.sayHi = () => {
    // se va a usar como callback
    console.log(`Hi my name is ${this.name}`);
  };
}

var person = new Person("Laura");

person.sayHi();

function test(cb) {
  cb();
}

// test(person.sayHi.bind(this)); // otra forma
test(person.sayHi);

class Person2 {
  constructor(name) {
    this.name = name;
  }

  // callback
  sayHi = () => {
    console.log(`Hi my name is ${this.name}`);
  };

  hola() {
    console.log("hola");
  }
}

var person2 = new Person2("Laura");

console.log(person2);

test(person2.sayHi)
