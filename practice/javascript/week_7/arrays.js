var myVar = "one item";
var firstDay = "monday";
var secondDay = "tuesday";

// Array syntax; a collection of data surrounded by square brackets, [].
// index starts at 0 (zero)
var daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

console.log(daysOfWeek);
/*
    You can mix datatypes in an array but should hold data related to each other.
    [100, true, "hello"]
*/

console.log(daysOfWeek[3]);
console.log(daysOfWeek[6]);
// prints "undefined" since there is nothing there
console.log(daysOfWeek[7]);

// change "sunday" to "funday"
daysOfWeek[6] = "funday";
console.log(daysOfWeek[6]);

daysOfWeek[7] = "superday";
console.log(daysOfWeek);