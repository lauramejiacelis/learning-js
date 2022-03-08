function test() {
  var name = "david";
  console.log(name);

  if (true) {
    var name = "laura";
    console.log(name);
  }
  console.log(name);
}

//test();

function block() {
  let name = "david";
  console.log(name);

  if (true) {
    let name = "laura";
    console.log(name);
  }
  console.log(name);
}

block();

// const are not allowed to be re assigned
const lastname = "Mejia";
console.log(lastname);
//lastname = "Perez";

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

const obj = { name: "david" };
obj.lastname = "sttivend";
console.log(obj);

const { name, ...rest } = obj;

console.log(rest);
console.log(obj);
