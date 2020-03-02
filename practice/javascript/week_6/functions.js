// Intro to functions

// example of functions used
console.log();
Math.ceil();
Math.floor();
Math.random();
Math.round();

Date.now;
var currentTime = Date.now().toString();
console.log(currentTime);

// A function that belongs to a class ("library") is called
// a method.
// A variable that belongs to a class ("library") is called
// a property.

console.log("Hello");

// The syntax structure of a function definition.
// Similar to css rule sets
function nameOfFunction() {
    console.log("-----");
    console.log("Hello");
    console.log("-----");
}

nameOfFunction();
nameOfFunction();

/*
    Similar to CSS rulesets
    
    selector {
        property: value;
        property: value;
    }

*/

function myFunction() {
    console.log("my string");
    console.log(100);
    console.log(true);
}

myFunction();

var myString = "my other string";
var myNumber = 100;
var myBoolean = true;

function myOtherFunction() {
    console.log(myString);
    console.log(myNumber);
    console.log(myBoolean);
}

myOtherFunction();

// arguments and parameters

// "hello" is the argument given to function
console.log("hello");
console.log("hello \n", 100, true);
console.log("hello", 200, false);

// parameter is the variable that accepts the data; 
// only when defining a function
// text is the parameter (variable) that accepts data
// given to this function
function takesDataIn(text) {
    console.log(text);
}

takesDataIn("How are you doing?");
takesDataIn("Goodbye!");

function takesDataInTwo(text1, text2) {
    console.log(text1);
    console.log(text2);
}
takesDataInTwo("one!");
takesDataInTwo("one!", "two!");

function adder (number1, number2) {
    var sum = number1 + number2;
    console.log("The sum of " + number1 + " and " + number2 + " is " + sum);
}

adder(1, 2);
adder(3, 4);