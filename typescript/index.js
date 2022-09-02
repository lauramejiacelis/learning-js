// person => string
function getName(person) {
    return person.name;
}
var laura = {
    name: "Laura",
    lastname: "Mejia",
    age: 16
};
var personName = getName(laura);
console.log(personName);
