/*
 *
// casting a boolean

console.log(!!undefined) // false
console.log(!!null) // false

console.log(!!"") // false
console.log(!!"11232") // true
console.log(!!0) // false
console.log(!!1) // true
console.log(!!{}) // true
console.log(!!{ a:true }) // true
console.log(!![]) // true
console.log(!![1,2,3]) // true
console.log(!!true) // true
console.log(!!false) // false

// operadores lógicos

console.log(1 > 0) // mayor
console.log(1 >= 0) // mayor o igual
console.log(1 < 2) // menor
console.log(1 <= 2) // menor o igual

console.log(true && true) // true
console.log(true || false) // true

*/




console.log("1" ==  1) // igualdad de valor
console.log("1" === 1) // igualdad de valor y tipo *
console.log("1" === "1")

console.log("1" != 1) // diferencia de valor
console.log("1" !== 1) // diferencia de valor y tipo *


// los objetos y los arreglos se comparan por referencia (en memoria)

// ref#123 ref#456
console.log({ name: 'david' } === { name: 'david' }) // false 


// ref#aaa
var person = {name: 'david'}

// ref#aaa
var copyPerson = person

console.log(person === copyPerson) // true

console.log([1,2,3] !== [1,2,3])
