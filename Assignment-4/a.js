// Declaring variables
const myName = "Rishabh Kumar Tiwari";
let age = 20;
var isStudent = true;

//Printing variables
console.log("Name: " + myName);
console.log("Age: " + age);
console.log("Is Student: " + isStudent);

/*
let → mutable variable.

const → immutable variable (cannot be reassigned).

var → older way, function-scoped.
*/

// Function to calculate BMI
function calculateBMI(weight, height) {
    return weight / (height * height);
}

console.log("BMI: " + calculateBMI(70, 1.75));

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log("Celsius to Fahrenheit: " + celsiusToFahrenheit(25) + "°F");

// Condition (if-else) to validate age
console.log("Age Validation: ");
if (age >= 18) {
    console.log(myName + " is an adult.");
} else {
    console.log(myName + " is a minor.");
}

// Switch-case to validate user role
console.log("User Role Validation: ");
let role = "student";
switch (role) {
    case "instructor":
        console.log("Welcome, Instructor!");
        break;
    case "student":
        console.log("Welcome, Student!");
        break;
    default:
        console.log("Unknown role.");
}

// Loop to generate a dynamic list of users
console.log("User List: ");
let users = ["Rishabh", "Vikash", "Abhishek", "Shivam", "Saurabh"];
for (let i = 0; i < users.length; i++) {
    console.log("User " + (i + 1) + ": " + users[i]);
}

// While loop to count from 1 to 5
console.log("Counting from 1 to 5: ");
let count = 1;
while (count <= 5) {
    console.log("Count: " + count);
    count++;
}

// Do-while loop to show message at least once
console.log("Do-While Loop: ");
let tries = 0;
do {
    console.log("Attempt #" + (tries + 1));
    tries++;
} while (tries < 3);