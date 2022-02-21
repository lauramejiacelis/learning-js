function Vehicle(numWheels, type, horsePower, year) {
  this.numWheels = numWheels;
  this.type = type;
  this.horsePower = horsePower;
  this.year = year;
}

Vehicle.prototype.move = function () {
  if (this.type === "ground") {
    console.log("I'm rolling");
  } else {
    console.log("I'm flying");
  }
};

function Car(name, model, horsePower, year) {
  Vehicle.call(this, 4, "ground", horsePower, year); //connects properties
  this.name = name;
  this.model = model;
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype); //inheritance

Car.prototype.move = function () {
  Vehicle.prototype.move.call(this);
  console.log("I'm a car");
};

function Plane(name, model, isPrivate, numCrew, horsePower, year) {
  Vehicle.call(this, 2, "airborne", horsePower, year);
  this.name = name;
  this.model = model;
  this.isPrivate = isPrivate;
  this.numCrew = numCrew;
}

Object.setPrototypeOf(Plane.prototype, Vehicle.prototype);

Plane.prototype.move = function () {
  Vehicle.prototype.move.call(this);
  console.log("I'm an airplane");
};

var pichirilo = new Car("mazda", "323", 10, 1995);

console.log(pichirilo);
pichirilo.move();

var jet = new Plane("Boing", "super jet", true, 2, 50, 2000);

console.log(jet);
jet.move()