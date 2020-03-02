// concatenation example

"a word" + " another ";
"a number " + 100;
console.log("hello" + true);
console.log(100 + "a number");

/*
" _____ went to the _____, and did _____ but there was a probelm, _____ did not work.";
*/

function sentenceBuilder(person, place, action, item) {
    var firstPart = " went to the ";
    var secondPart = ", ";
    var thirdPart = "but there was a problem, ";
    var fourthPart = " did not work.";

    var completeSentence = person + firstPart + place + secondPart + thirdPart + item + fourthPart;
    console.log(completeSentence);
}
    
sentenceBuilder("Osiah", "Happy Donut", "fought with the store owner", "the fists");
sentenceBuilder("Jack", "well", "got water", "the pail");

function getNumber() {
    var theSpecialNumber = 42;
    return theSpecialNumber;
    /* alternate method
    return 42;
    */
}

console.log(getNumber());

var newNumber = getNumber() + 42;

console.log(getNumber()/50);

function getName() {
    var firstName = "eduardo";
    /*
    return null;
    */
    return firstName;
}

console.log(getName() + " is a person.");

function adder(num1, num2) {
    return num1 + num2;
}

console.log( adder(100, "Tony"));

function taxCalculator(itemPrice) {
    var tax = itemPrice * 0.085;
    var taxedFixedToTwoDecimalPlaces = tax.toFixed(2);
    var taxNumber = parseInt(taxedFixedToTwoDecimalPlaces);
    return taxNumber;
}

var laptopPrice = 999.95;
var laptopTax = taxCalculator(laptopPrice);

console.log("Price of item: " + laptopPrice + ". Tax on item: " + laptopTax + ". Total Cost: $" + (laptopPrice + laptopTax) + "." );

/*
    Create a function called mathifier that takes 2 numbers. Add them, then add the sum
    to the first number, and then multiply that by the second number. Function returns 
    the results
*/

function mathifier(num1, num2) {
    sum = num1 + num2;
    sumTwo = sum + num1;
    product = sumTwo * num2;
    return product
}
console.log(mathifier(1, 2));

function mathifier2(num1, num2) {
    return (((num1 + num2) + num1) * num2);
}

console.log(mathifier2(1,2));

console.log(mathifier(11, 22));
console.log(mathifier2(11,22));

/*
    This function is called mathResults which take 2 numbers.
    This function will output in console.log the following
    along with the original 2 values:
        * sum of these two numbers
        * difference of these two numbers
        * product of these two numbers
        * dividend of these two numbers
        * leftover of these two numbers; modulo
*/

function mathResults(num1, num2) {
    console.log("Sum of " + num1 + " and " + num2 + " = " + (num1 + num2));
    console.log("Difference of " + num1 + " from " + num2 + " = " + (num1 - num2));
    console.log("Product of " + num1 + " and " + num2 + " = " + (num1 * num2));
    console.log("Quotient of " + num1 + " divided by " + num2 + " = " + (num1 / num2));
    console.log("Remainder of " + num1 + " modulo " + num2 + " = " + (num1 % num2));

}
mathResults(3, 4);