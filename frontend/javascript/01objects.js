var person = {
  name: "david",
  lastname: "sttivend",
  age: 30
}

// acceder a las propiedades del objeto (.)
console.log(person.name)

// Nested property + asignar luego de declaración
person.perro = {
  name: 'Amapola',
  race: 'Cocker'
}

console.log(person)

// reasignar una propiedad
person.perro.name = 'Olivia'

console.log(person)

person["First-Name"] = true

console.log(person)


var property = "name"

// acceder dinamicamente a la propiedad de un objeto
console.log(person[property])

