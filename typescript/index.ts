type Person = {
  name?: string;
  lastname?: string;
  age?: number;
};

// person => string
function getName(person: Person): string {
  return person.name;
}

const laura: Person = {
  name: "Laura",
  lastname: "Mejia",
  age: 16,
};

const personName = getName(laura);

console.log(personName);
