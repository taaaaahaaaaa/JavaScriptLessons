// Write code that checks whether a number entered from the console is positive, negative, or 0.

let number = parseInt(prompt("Please enter a number ")) 
if (number > 0) {
    console.log("The number you entered is a positive number")
} else if (number<0){
    console.log("The number you entered is a negative number")
}else {
    console.log("The number you entered is 0")
}

//-------------------------------------------------------------------------------------------------------------------------------------

// Get 3 integers from console and print the largest of them

const firstnumber = parseInt(prompt("Please enter first number"));
const secondnumber = parseInt(prompt("Please enter second number"));
const thirdnumber = parseInt(prompt("Please enter third number"));

const largestnumber = Math.max(firstnumber,secondnumber,thirdnumber);
console.log("largest number", largestnumber);

//-------------------------------------------------------------------------------------------------------------------------------------

//Create a 4-operation calculator

const num1 = parseInt(prompt("Please enter first number"))
const num2 = parseInt(prompt("Please enter second number"))
const operator = prompt("Please enter the operator you want to use (Only + - * /)")
let total;

switch (operator){
    case '+':
        total = (num1+num2);
        console.log("result:",total)
        break;
    case '-':
        total = (num1-num2);  
        console.log("result:",total)  
        break;
    case '*':
        total = (num1*num2);
        console.log("result:",total)
        break;
    case '/':
        total = (num1/num2);
        console.log("result:",total)
        break;
    default:
        alert("Please enter an operator")
        break;        
}

//-------------------------------------------------------------------------------------------------------------------------------------

// Write the code that outputs your weekly lesson and activity schedule according to the day value entered from the console, with a switch-case structure.
// • Program
// • Monday, Tuesday, Wednesday, Thursday -> InClass
// • Friday -> Teamwork
// Saturday -> InClass + Workshop
// • Market -> Self-Study
// •
// Otherwise -> Please enter a day.

const gun = prompt("Please enter which day you want to see")
let program;

if (gun == "monday","tuesday","wednesday","thursday","friday","saturday","sunday") {
switch (gun){
    case "monday":
    case "tuesday":
    case"wednesday":
    case"thursday":
        program = "InClass";
        break;
    case "friday":
        program = "Teamwork";   
        break; 
    case "saturday":
        program = "Inclass + Workshop";
        break;
    case "sunday":
        program = "Self-Study";
        break;
    default:
        alert("Please enter a day")        
        break;    
}
console.log("program on the day you specify:", program)
} else {
  alert("Please enter a day");
}

//-------------------------------------------------------------------------------------------------------------------------------------

// Write a program that prints the value Pass or Fail depending on the grade entered. You can accept the passing score as 50.

const point1 = parseInt(prompt("Enter your point"))
if (point1 <= 100 && point1 >= 0) {
if(point1>=50){
    console.log("Passed")
}else {
    console.log("Failed")
}}else {
    console.log("Please enter your point")
}

//-------------------------------------------------------------------------------------------------------------------------------------

// Write a program that outputs Fail, Conditional Pass or Pass depending on the grade entered.
// •
// 40. Course Failure
// ·
// 40-50. Class Conditionally Passed
// •
// If Point > 50, Pass 

const point2 = parseInt(prompt("Enter your point"))
if(point2>100){
    alert("Please enter your real point")
}
if(point2>50){
    console.log("Passed")
}else if(40<point2<50) {
    console.log("Passed conditionally")
}else{
    console.log("Failed")
}

//-------------------------------------------------------------------------------------------------------------------------------------

// Get person's salary from Console
// - If the entered salary is less than the minimum wage, a 50% increase in the salary
// -
// Otherwise 10% increase
// Write the code using the ternary operator

let salary1 = parseInt(prompt("Enter your salary"))
const minimumwage = 17002
let newSalary = salary1 < minimumwage ? salary1 * 1.5 : salary1 * 1.1;
console.log("Congratulations! Your new salary:",newSalary)

//-------------------------------------------------------------------------------------------------------------------------------------

// Get person's income and expense amount from Console
// - Credit can be given if the remaining money from the person's expenses is at least the minimum wage.
//  - Otherwise Credit Cannot Be Given
// Write the code using the ternary operator

const income = parseInt(prompt("Enter your income"))
const expense = parseInt(prompt("Enter your expense"))
const minimumwagee = 17002

let credit = (income-expense)>= minimumwagee ? "Credit can be given" : "credit can not be given"
console.log(credit)