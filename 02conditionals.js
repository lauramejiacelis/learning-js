// expression que evalue a boolean

if(1 < 3){
  console.log('se ejecuta el contenido')
}

var dog = {}; // undefined

if(dog){
  console.log(dog.name) // undefined porque person no tiene propiedad name
}

var person = {
  name: 'david',
  age: 30, 
  gender: 'male',
  hasChildren: false
}

// puede entrar a que baño?

if(person.gender === 'male'){
  console.log('puede entrar al baño de hombres')
} else {
  console.log('puede entrar al baño de mujeres')
}


if(person.hasChildren){
  console.log('puede entrar al baño familiar')
} else if (person.gender === 'male'){
  console.log('puede entrar al baño de hombres')
} else if(person.gender === 'female'){
  console.log('puede entrar al baño de mujeres')
} else {
  console.log('puede hacer en las maticas')
}



var personName = 'lauris'


switch(personName){
  case 'david':
    console.log('hola david, bienvenido')
    break;
  case 'dianita':
    console.log('hola dianita, bienvenida')
    break;
  case 'lauris':
    console.log('hola lauris, bienvenida')
    break;
  default:
    console.log('desconocido!!')
}
