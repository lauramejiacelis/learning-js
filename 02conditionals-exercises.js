/*
  
  se puede pensionar si:
  * Hombre 60 años o más y 2000 semanas
  * Mujer 57 años o más y 1500 semanas

*/
var person = {
  name: 'lauris',
  age: 58,
  weeks: 1600,
  gender: "female"
}

if ((person.gender === "male" && person.age >= 60 && person.weeks >= 1200) || (person.gender === "female" && person.age >= 57 && person.weeks >= 1500)) {
  console.log("Se puede jubilar");
} else {
  console.log("NO se puede jubilar");
} 

