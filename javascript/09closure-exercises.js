/*
    Contador de x en y

    makeCounter(10) -> counter(2) = 12
                    -> counter(3) = 15
 */

function makeCounter(initial) {
  var count = initial;
  return function counter(amount) {
    count = count + amount;
    return count;
  };
}

var counter10 = makeCounter(10);

console.log(counter10(1));
console.log(counter10(1));
console.log(counter10(2));
console.log(counter10(5));

var counter2 = makeCounter(2);

console.log(counter2(2));
console.log(counter2(2));
console.log(counter2(2));

/*
  Hotel welcome message is : "Hi welcome to Hiath Hotel, $NAME$"

  Hotel Bye message: "Thank you for your staiying, $NAME$"
*/

function makeMessage(message) {
  return function (name) {
    return message + ", " + name;
  };
}

var welcome = makeMessage("Hi welcome to Hiath Hotel");

var bye = makeMessage("Thank you for your staiying");

console.log(welcome("David"));
console.log(welcome("Laura"));
console.log(bye("David"));
console.log(bye("Laura"));

var person = {
  name: "david",
  lastname: "sttivend",
};

var lau = {
  name: "laura",
  lastname: "mejia",
};

function getProp(prop) {
  return function (obj) {
    return obj[prop];
  };
}

function getFromPerson(obj) {
  return function (prop) {
    return obj[prop];
  };
}

var getName = getProp("name");
var getLastName = getProp("lastname");

var getFromPerson = getFromPerson(person);

console.log(getName(person));
console.log(getLastName(person));
console.log(getName(lau));

console.log(getProp("name")(person));

console.log(getFromPerson("name"));
console.log(getFromPerson("lastname"));

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

var sum1 = sum(1);

var sum12 = sum1(2);

var result = sum12(3);

console.log(result);
console.log(sum(1)(2)(3));
