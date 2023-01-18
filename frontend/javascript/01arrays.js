var arr = [1,2,3,4,5]

// acceder por el indice, comienza en 0
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

// introduce un elemento al final del arreglo
arr.push(10)

console.log(arr)

var persons = [
  { 
    name:'david',
    perro: {
      color: 'amarillo'
    } 
  },
  { name: 'dianita' },
  { name: 'lauris' }
]

// acceder a objetos dentro de un arreglo
console.log(persons[0].perro.color)


// largo de un arreglo propiedad length
console.log(persons.length)

