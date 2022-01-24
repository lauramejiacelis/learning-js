var carName;
var parkCar;
function driveCar(carName) {
  console.log("driving " + carName);
}

console.log(carName); // undefined

driveCar(carName); // driving undefined

parkCar(carName); // error undefined is not a function

carName = "volvo";

parkCar = function (carName) {
  console.log("parking " + carName);
};
