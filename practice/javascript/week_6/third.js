// use descriptive names for variables and file names

var buildingHeight = 100;
var buildingHeightMeters = 100;

// equal sign; everything on right happens first
var sum = 1000 + 50;

var product = 50 * 50;

var quotient = 20 / 10;

var difference = 100 - 10;

/*
    When using var names on the right side of the equal sign,
    you are calling for value and then you are running
    the operators, and finally you are storing the final value
    into the variable total
*/
var total = product + sum;  
// 3550

console.log(total);

var radius = 5000;
var pi = 3.14159265359;

var diameterOfCircle = 2 * radius;
/*
var perimeterOfCircle = diameterOfCircle * pi;
*/

// use built-in Math library in JavaScript
var perimeterOfCircle = diameterOfCircle * Math.PI;

console.log("The diameter of the circle with a radius of " + radius + " is " + diameterOfCircle);

console.log("The diameter of the circle with a radius of " + radius + " is " + diameterOfCircle + ". The perimeter of the circle is " + perimeterOfCircle);

// Rounds to the nearest whole number
Math.round(3.14);
var rounded = Math.round(3.14);

// rounds up
var roundedUp = Math.ceil(45.1);

// rounds down
var roundedDown = Math.floor(45.9);

console.log(rounded);
console.log(Math.round(3.14));

// random number generator
var someNumber = Math.random();
console.log(someNumber);

// ranges from 1 to 10
var someNumber = Math.floor((Math.random() * 10) + 1);

var randomNumber = (Math.random() * 10) + 1;
var roundedRandomNumber = Math.floor(randomNumber);
// someNumber = Math.floor(someNumber);

console.log(someNumber);