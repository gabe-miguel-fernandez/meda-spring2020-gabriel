
// property
Math.PI;
Math.SQRT2;

// method
Math.random();

function random() {

}

random();

// big o notation


// scope

for (var i = 0; i < 10; i++) {
    console.log(i);
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}


var myArray = [null, undefined, NaN, 0, "", false];


// empty array
myArray[0] = null;
myArray[1] = null;
myArray[2] = null;
myArray[3] = null;
myArray[4] = null;
myArray[5] = null;
myArray[6] = null;

// loop

for (var i = 0; i < myArray.length; i++) {
    myArray[i] = null;
}

/* 
   array methods: push, pop, shift, unshift
   array property: length
*/

/*  
    array.push(); argument provided is added to the end 
    of the array
*/
myArray.push("hello there!");
console.log(myArray);

/*
    array.pop() method; no argument, removes and returns
    the last item in the array.Math
*/
var removedDataPiece = myArray.pop();
console.log(myArray);
console.log(removedDataPiece);

/* 
    array.shift() method; no argument; removes and returns
    the first item in the array;
*/
var removedFirstItem = myArray.shift();

console.log(myArray);
console.log(removedFirstItem);

/*
    array.unshift() method; argument provided is added to
    start of array
*/
myArray.unshift(1000);
console.log(myArray);

/*
    array.length property; returns number of items in the array
*/
console.log(myArray.length);

for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

for (var i = 0; i < myArray.length; i = i + 2) {
    console.log(myArray[i]);
}

