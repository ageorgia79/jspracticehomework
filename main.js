console.log("What's Up");
console.log(3>1);
console.log(400 == 1000);
console.log(400 !== 100);


var balloons = ["red", "yellow", "blue", "magenta"]
	balloons.slice(1, 4);







//Defining "myCar" and using function to change year, make,
// and model//
var myCar = new Object();
	myCar.make = "Ford";
	myCar.model = "Mustang";
	myCar.year = 1969;

function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

myCar = new Car("Eagle", "Talon", 1993);

myCar = new Car("Mercedes", "E320", 2008);

myCar = new Car("Jaguar", "XJ", 2012);




//Defining "Toolbox" and using function to change color, size,
//and amount of drawers//
var Toolbox = new Object();
	Toolbox.color = "red";
	Toolbox.size = "huge";
	Toolbox.drawers = 12;

function newtoolbox(color, size, drawers) {
	this.color = color;
	this.size = size;
	this.drawers = drawers;
}

Toolbox = new newtoolbox("blue", "small", 6);

Toolbox = new newtoolbox("yellow", "massive", 15);

Toolbox = new newtoolbox("purple", "tiny", 1);




//Another example of Ojects and function tool to change specifics//
//This is confusing//
var House = new Object();
	House.rooms = "five";
	House.floors = "two";
	House.yard = "large";

function newhouse(rooms, floors, large) {
	this.rooms = number;
	this.floors = levels;
	this.yard = size;
}

House = new newhouse("twelve", "five", "small");









