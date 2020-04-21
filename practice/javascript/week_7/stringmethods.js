// goal: manually replace question mark

var myString = "Hello there how are you?";

console.log(myString.length);

var myStringArray = myString.split("");

console.log(myStringArray);

console.log(myStringArray[23]);

myStringArray[23] = "."

console.log(myStringArray);

var finishedString = myStringArray.toString();

console.log(finishedString);

var finishedString = myStringArray.toString("");

console.log(finishedString);

var finishedString = myStringArray.join("");

console.log(finishedString);

myStringArray.pop();
myStringArray.pop();
myStringArray.shift();
myStringArray.shift();
console.log(myStringArray);