var obj = {
  name: "Laura",
  sayHi: function sayHi(hobby) {
    console.log(`Hi my name is ${this.name} and my hobby is ${hobby}`);
  },
};

// Implicit this
obj.sayHi("leer");

// Explicit

obj.sayHi.apply({ name: "Pedro" }, ["dance"]);
obj.sayHi.call({ name: "Roberto" }, "cook");

var copyFn = obj.sayHi.bind({ name: "Cecilia" });
copyFn("jogging");

var otherFn = obj.sayHi.bind({ name: "Cecilia" }, "running");

otherFn();

function sum(a, b, c) {
  return a + b + c;
}

var sum10 = sum.bind(null, 10);

console.log(sum10(5, 1));

var sum15 = sum.bind(null, 10, 5);

console.log(sum15(5));
