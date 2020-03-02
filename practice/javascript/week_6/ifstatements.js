// if-else statement, conditional statements
// if (condition) {}

if (false) {
    console.log("This code ran if the if statement was true.")
}
console.log("End of script.")

/*
    boolean operators
    ==
    >=
    <=
    !=
*/

var age = 14;
if (age >= 21) {
    console.log("Congrats, go get drunk!");
}

// var password = 123456;
var password = "abcdef";

if (password == "abcdef") {
    console.log("Welcome to your profile!");
}

var isSleepy = true;
if (isSleepy) {
    console.log("Go home and sleep");
}

console.log(parseInt("123"));
console.log(parseInt("1 Apple"));
console.log(parseInt("Apple 1"));

if (true != false) {
    console.log("is true");
}

/*  type coercion: forace a datatype to another datatype
    The following allow type coercion:
        ==, >=, <=, !=
    These do not allow type coercion:
        ===, >==, <==, !==
*/

var test = "1000";
if (test == 1000) {
    console.log("test!");
}

// if - else parts
if (false) {
    console.log("hello");
} else {
    console.log("goodbye")
}

/* If a var is hold any of the following, it will
    will become a "false" boolean
    FALSYS:
        undefined
        null
        0 (zero)
        "" (empty string)
        NaN
        false

*/

/* If a var is hold any of the following, it will
    will become a "true" boolean
    TRUTHYS:
        1 (one)
        true
        "0"
        -3 (negative number)
        (anything else than a falsy)
*/

var checkIfTrue = "";

if (checkIfTrue) {
    console.log("The '" + checkIfTrue + "' value is truthy.");
} else {
    console.log("The '" + checkIfTrue + "' value is falsy.");
}

/* logical operators: &&, ||, !
    && = both sides must be true
    || = either side must be true
    ! = if true, becomes false; if falses, become true
*/

var firstBool = true;
var secondBool = false;

if (firstBool) {
    console.log("This has run because the condition is true.")
}

if (firstBool || secondBool) {
    // do something;
}

var level = 25;

if ((level > 0) && (level < 18)) {
    console.log("You are a child.");
} else {
    console.log("You are an adult or not yet born.");   
}

if ((level > 0) && (level < 18)) {
    console.log("You are a child.");
} else if (level < 0) {
    console.log("You are not yet born.");   
} else if ((level >= 18) && (level < 112)) {
    console.log("You are an adult");
} else {
    console.log("Thank you for living, come again next time.");
}

/*
    if always comes first.
    "else if" must come after if.
    "else if" is optional.
    else must come last; else is optional; only one else
    per if statement.
*/

/* multiple logic operators
    all && evaluated first, then || operators
    if operators have equal precedence, then it's from left to right
*/

if (true && false || true || false && true) {

}