console.log("What's Up");

console.log(3>1);

console.log(400 == 1000);

console.log(400 !== 100);

3 + 3

4 > 2

10 * 2 == 5 * 4



var balloons = ["red", "yellow", "blue", "magenta"]
	balloons.slice(1, 4);


var numbers = ["220", "440", "880", "1660"]
	numbers.slice(3, 4);


var puppies = ["doberman", "rotweiler", "dauchsund", "poodle"]
	puppies.pop(1, 3);






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
	House.color = "blue";
	House.floors = 2;
	House.yard = "large";

function newhouse(color, floors, yard) {
	this.color = color;
	this.floors = floors;
	this.yard = yard;
}

House = new newhouse("red", 5, "small")


//Took "House" which was an object that had been changed with a 
//function and assigned a new array to it.  Now the "House" is no
//longer associated with the dimensions and is now just the 
//statement "I sort of get this".  The old info was overwritten
var House = new Array("I sort of get this");















