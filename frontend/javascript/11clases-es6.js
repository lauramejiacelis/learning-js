class Human {
  constructor(algo) {
    console.log(algo);
    this.species = "human";
  }

  live() {
    console.log("I'm living");
  }
}

class Person extends Human {
  constructor(name, lastname) {
    super("algo"); // Human.call(this)
    this.name = name;
    this.lastname = lastname;
  }

  sayHi() {
    console.log(`Hi my name is ${this.name}`);
  }

  live() {
    super.live();
    console.log("Living wildly");
  }
}

var laura = new Person("Laura", "Mejia");

console.log(laura);
laura.sayHi();
laura.live();
