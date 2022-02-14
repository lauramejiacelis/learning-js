var pets = [
  { name: "Amapola", procedures: [1] },
  {
    name: "Paco",
    procedures: [1, 2, 3],
  },
  {
    name: "Olivia",
    procedures: [1, 3],
  },
];

var procedure = {
  1: { id: 1, name: "General revision", price: 20000 },
  2: {
    id: 2,
    name: "prophylaxis",
    price: 80000,
  },
  3: { id: 3, name: "grooming", price: 40000 },
};

/*
    1. Total profit from the Vet
    2. What procedure names Amapola paid for.
    3. Which procedure was the most solicited
  */

function getProp(prop) {
  return function (obj) {
    return obj[prop];
  };
}
var getName = getProp("name");

function getFromPet(obj) {
  return function (prop) {
    return obj[prop];
  };
}

var amaProcedures = pets.find(function (pet) {
  if (pet.name === "Amapola") {
    //console.log(`Pet procedure: ${pet.procedures}`)
    return pet.procedures;
  }
})
//console.log(amaProcedures)
//console.log(procedure[amaProcedures])
//console.log(procedure[amaProcedures.procedures].name)

var solicited = pets.map(function (pet) {
  return pet.procedures;
})
solicited = solicited.reduce((acc, val) => acc.concat(val), []) //aplané la lista
//console.log(solicited);
const mostSolicited = ar => ar.reduce((acum, el, i, ar) => {
  const count=ar.filter(e => e==el).length;
  return count > acum[1] ? [el] : acum;
}, ["", 0]
) //encontrando el más solicitado
//console.log(mostSolicited(solicited))


var getFromPet = getFromPet(amaProcedures);
console.log(`${getName(amaProcedures)} paid for Procedure: ${getName(procedure[getFromPet("procedures")])}`)

console.log(`The most solicited procedure was: ${getName(procedure[mostSolicited(solicited)])}`);



