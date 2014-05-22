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

///////////////////////////////////////////
//**lecture stuff//ObjectLiteral//
////////////////////////////////////////
var myObject = {
	dog: "Duke",
	name: "Tad",
	age: 26,
	year: 1987,
	cat: ["meow", 1, 2]

};

function firstThree(Array) {
	return Array.slice(0, 3)
};

function newObject(dog, name, age) {
	this.dog = dog;
	this.name = name;
	this.age = age;
}

myObject = new newObject("Frank", "Bill", 14);

myObject = new newObject("Billy", "William", 10);

myObject = new newObject("Don", "Steve", 145);


//////////*****HOMEWORK******///////////////////////

//



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
};

House = new newhouse("red", 5, "small")


//Took "House" which was an object that had been changed with a 
//function and assigned a new array to it.  Now the "House" is no
//longer associated with the dimensions and is now just the 
//statement "I sort of get this".  The old info was overwritten
var House = new Array("I sort of get this");

function popIt(Array) {
	return -1

}

//[1,2,3].forEach
//[1,2,3].forEach(function(x){
//	console.log(x);
//})
//function square(x) { return x * x }

//callbacks want an actual function to run, they dont want
//you to do the function


//////////////////////////////////////////////////

//var players = [
//{name: 'bob'},
//{name: 'newhart'}
//33,
//{name: 'whitney'}
//]

//players.forEach(function(player){
//	console.log(player.name);
//33 ****"33" used for example only***delete for actual result***
//***will only return "undefined"
//})

/////////////////////////////////////////////////

//players.map(function(player){
//	return player.name;
//})   ***this is called a functor***

//[1,2,3,4].map(function(x){
//	return x + 100;
//})
//**should return [101, 102, 103, 104]**


////////////////////////////////////////////////////

//[1,2,3,4].map(function(x){
//	return {score: x + 100}
//})   **should return "score"**

/////////////////////////////////////////////////////

//[1,2,3,4].map(function(x,index){
//	return x + index
//})

//**map reduce**  "Amazon suggestions"


//////////////////////////////////////////////////////

//[1,2,3,4]  **using add object 1 + 2 on each for "reduce"**
//[3,3,4]
//[6,4]
//[10]	

///////////////////////////////////////////////////////

//[1,2,3,4].reduce(function(x, y){
//	return x + y;
//})
//10 **should be this**

///////////////////////////////////////////////////////

//[1,2,3,4].reduce(function(x, y){
//	return x + "" + y;
//})
//** should come to "1234"**

//[1,2,3,4].reduce(function(x, y){
//	return x + y;
//})
//10 **should be this**

//////////////////////////////////////////////////////

//"meta" defined as "info about the info"










///**homework begins here//
//newObject//**this is an example of a new objecvar newObject = {
	
var newObject = {
	car: "Porche",
	doors: "four",
	wheels: "round",
	engine: "small"
};
//this is an example of "reduce"
["Porche","four","round","small"].reduce(function(x, y){
	return x + y;
})

var newObject = [
	{car: "Porche"},
	{doors: "four"},
	{wheels: "round"},
	{engine: "small"}
]

//this is an example of a map//
newObject.map(function(x){
	return x;
})

//this is an example of a "forEach"
newObject.forEach(function(parts){
	console.log(parts.car)
})

//function square(x) { return x }
////////////////////////////////////////////////////////////



//this is a new object//
var TheIronYard = {
	classrooms: 2,
	intructors: 2,
	students: 17
};

//this is an example of "reduce"
["classrooms","instructors","students"].reduce(function(x, y){
	return x + y;
})

var TheIronYard = [
	{classrooms: 2},
	{instructors: 2},
	{students: 17}
]

//this is and example of a map//
TheIronYard.map(function(x){
	return x;
})
//[2,2,17].map(function(x){
//	return x * x;
//})     //WHY WONT THIS WORK//

//this is an example of a "forEach"
TheIronYard.forEach(function(coolstuff){
	console.log(coolstuff.instructors)
})
////////////////////////////////////////////////////////////////

//this is a new object//
var bigFoot = {
	height: 6,
	weight: 400,
	scary: true
};

//this is an example of "reduce"
["height","weight","scary"].reduce(function(x, y){
	return x + y;
})

var bigFoot = [
	{height: 6},
	{weight: 400},
	{scary: true}
]

//this is an example of a map
bigFoot.map(function(x){
	return x;
})

//this is and example of a "forEach"
bigFoot.forEach(function(size){
	console.log(size.weight)
})
/////////////////////////////////////////////////////////////////

//this is a new object//
var georgiaFamily = {
	members: 6,
	fun: true,
	rich: false
};

//this is an example of "reduce"
["members","fun","rich"].reduce(function(x, y){
	return x + y;
})

var georgiaFamily = [
	{members: 6},
	{fun: true},
	{rich: false}
]

//this is an exaple of a map
georgiaFamily.map(function(x){
	return x;
})

//this is an example of a forEach
georgiaFamily.forEach(function(newbaby){
	console.log(newbaby.members)
})
//////////////////////////////////////////////////////////////////

//this is a new object
var yardWork = {
	grass: "cut",
	weeds: "pull",
	flowers: "fertilize"
};

//this is an example of a reduce
["cut","pull","fertilize"].reduce(function(x, y){
	return x + y;
})

var yardWork = [
	{grass: "cutt"},
	{weeds: "pull"},
	{flowers: "fertilize"}
]

//this is an example of a map
yardWork.map(function(x){
	return x;
})

//this is an example of a forEach
yardWork.forEach(function(flipout){
	console.log(flipout.weeds)
})
////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////

var stuntPilot = {
	plane: "fast",
	exciting: "true",
	dangerous: "false"
};

//this is an example of a reduce//
["fast","true","false"].reduce(function(x, y){
	return x + y;
})

var stuntPilot = [
	{plane: "fast"},
	{exciting: "true"},
	{dangerous: "false"}
]

///this is an example of a map

stuntPilot.map(function(x){
	return x;
})

//this is an example of a forEach

stuntPilot.forEach(function(danger){
	console.log(danger.dangerous)
})
/////////////////////////////////////////////////////////
































