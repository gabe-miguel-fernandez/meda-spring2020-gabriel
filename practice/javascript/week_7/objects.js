var employeeSalaries = [10000, 20000, 30000];

console.log(employeeSalaries[1]);

// assigning properties and their values to an object
var myFirstObject = {"jesse john": 10000, "mark": 20000, "sara": 30000};
myFirstObject.Jesse;
console.log(myFirstObject.mark);
console.log(myFirstObject["jesse john"]);

// address = "200 Happy St, Amazing City, Nebraska 23899"
var person = {
    "first_name": "Jesse",
    "last_name": "Saint",
    "age": 29,
    "address": {
        "street": "200 Happy Street", 
        "city": "Amazing City", 
        "state": "Nebraska", 
        "zip": 23899
    },
    "fav_color": "blue",
    "salary": 56000,
    "phone": 1233214321,
    "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", 'Nov', "Dec"]
};

console.log(person.last_name);

/*
    "\<h1\>Hello, this should be an example\</h1\>"
    forward slashes (/) generally don't need escaping.
*/

// dot notation to access object's property
console.log(person.phone);

/* 
    bracket notation to access object's property
    similar to array access; useful if property has
    spaces in them
*/
console.log(person["phone"]);

console.log(person.address);

console.log(person.address.city);

console.log(person.months);

console.log(person.months[11]);

console.log(person.months[12]);

var employeeData = [
    {"first_name": "Dave",
    "fav_things": ["TV", "Hiking", "Soccer"],
    "myFirstFunctionInObject": function () {
            console.log("Hello from inside the employee object!");
        }
    }, 
    {},
    {}
];

console.log("david".length);

console.log("david".indexOf("i"));

console.log("david".charAt(3));

employeeData[0].myFirstFunctionInObject();

var myString = "Hello there how are you?";

console.log(myString.length);

var myStringArray = myString.split("");

console.log(myStringArray);