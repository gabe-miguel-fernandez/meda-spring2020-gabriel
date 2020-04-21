/*
console.log("*");
console.log("**");
console.log("***");
console.log("**");
console.log("*");

var pyramidRow = "*";

console.log(pyramidRow);

pyramidRow = pyramidRow + "*";

console.log(pyramidRow);

pyramidRow = "*";

for (var i = 0; i < 10; i++) {
    pyramidRow = pyramidRow + "*";
    console.log(pyramidRow);
}


var pyramidArray = pyramidRow.split("");
pyramidArray.pop();
pyramidRow = pyramidArray.join("");
console.log(pyramidRow);

pyramidArray.pop();
pyramidRow = pyramidArray.join("");
console.log(pyramidRow);

pyramidArray.pop();
pyramidRow = pyramidArray.join("");
console.log(pyramidRow);

pyramidArray.pop();
pyramidRow = pyramidArray.join("");
console.log(pyramidRow);



console.log("\n-----\n");

*/

var randomNumber = (Math.random() * 20) + 1;
randomNumber = Math.floor(randomNumber);

pyramidRow = "";
var pyramidHeight = randomNumber;

for (var i = 0; i < pyramidHeight; i++) {
    pyramidRow = pyramidRow + "*";
    console.log(pyramidRow);
}

var pyramidArray = pyramidRow.split("");

for (var i = 0; i < pyramidHeight - 1; i++) {
    pyramidArray.pop();
    pyramidRow = pyramidArray.join("");
    console.log(pyramidRow);
}

console.log("\n-----\n");

function pyramidBuilder(height) {

    var pyramidHeight;

    if (height == undefined) {
        var randomNumber = (Math.random() * 20) + 1;
        pyramidHeight = Math.floor(randomNumber);
    } else {
        pyramidHeight = height;
    }

    pyramidRow = "";

    for (var i = 0; i < pyramidHeight; i++) {
        pyramidRow = pyramidRow + "*";
        console.log(pyramidRow);
    }

    var pyramidArray = pyramidRow.split("");

    for (var i = 0; i < pyramidHeight - 1; i++) {
        pyramidArray.pop();
        pyramidRow = pyramidArray.join("");
        console.log(pyramidRow);
    }
}

pyramidBuilder();

console.log("\n-----\n");

pyramidBuilder(5);