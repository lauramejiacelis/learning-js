var obj = {
  name: "David",
  age: 30,
  parent: {
    name: "Jaime",
    address: "casa envigado",
    house: {
      numRooms: 3,
    },
  },
};

var otra = obj.name;

var {
  parent: {
    name: parentName, // rename variable
    address,
    house: { numRooms },
    lastname = "apellido", // default value
  }, // redestruyo el objeto anidado
  parent, // para poder acceder a parent ya que lo había destruido
  age,
  name,
} = obj;

console.log("Example Destructuring Objects")
console.log(name);
console.log(parentName);
console.log(numRooms);
/*
console.log(address);
console.log(age);
console.log(parent);
console.log(numRooms);
*/

var arr = [
  "Laura",
  "Diana",
  "David",
  {
    balance: 10000,
  },
];

var [lau, dianita, profe, { balance }] = arr;

// var lau = arr[0]
console.log("Example Destructuring Arrays")
console.log(lau);
console.log(dianita);
console.log(profe);
console.log(balance);

var person = {
  name: "Laura",
};

function getPersonName({ name }) {
  console.log(name);
}
console.log("Example Destructuring")
getPersonName(person);
