// variables intro

console.log(10 + 10);

// Defining a variable with a name
// try not to use more than 3 words
var x;

x = "Hello";

console.log(x);
console.log(10 + x);

// use descriptive variable names
var usersAge;
var usersAddress;

// lowercase vs camel case
var thisclassissomewhatokay;
var thisClassIsSomewhatOkay;

// snake case; popular in python
var this_class_is_somewhat_okay;

thisClassIsSomewhatOkay = 100;
console.log(thisClassIsSomewhatOkay);

// single-line comment

/*  multi-line
    comment
*/

// Assigning a value to a variable
// can define and assign value to variable on same line
var y = 1001;
// passing variable value to console.log()
console.log(y);

// make sure to spell variable names correctly or error will result
var coolVar = 1999;
console.log("coolVar = " + coolVar);

// variable can only hold one value; previous value will be overridden
coolVar = 2000;
console.log("coolVar = " + coolVar);

var added = "hello " + 1000 + 50;   
var added = "hello " + (1000 + 50);   