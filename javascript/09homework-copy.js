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

/********************************************/
console.log("2. What procedure names (x-pet) paid for")
var petName = "Paco";

var petProcedures = pets.find(function (pet) {
  if (pet.name === petName) {
    return pet.procedures; //objeto
  }
})
//console.log(petProcedures.procedures) // array
petProcedures = petProcedures.procedures;
//console.log(petProcedures)

function readProcedure(procedures) {
  var read = [];
  procedures.forEach(function (element, index, array) {
    read.push(procedure[element].name);
  })
  return read;
}

console.log(`${petName} paid for this procedures: ${readProcedure(petProcedures)}`)

// function readProcedure(procedures) {
//   var element;
//   var read = [];
//   for (let i = 0; i < procedures.length; i++) {
//     element = procedures[i];
//     if (element === 1 || element === 2 || element === 3) {
//       read.push(procedure[element].name);
//     }
//     //console.log(read)
//   }
//   return read;
// }


// console.log(readProcedure(petProcedures.procedures));
// console.log(`${petName} paid for this procedures: ${readProcedure(petProcedures.procedures)}`)

/********************************************/
console.log("3. Which procedure was the most solicited")

var solicited = pets.map(function (pet) {
  return pet.procedures;
})
solicited = solicited.reduce((acc, val) => acc.concat(val), []) //aplané la lista
console.log(solicited);


