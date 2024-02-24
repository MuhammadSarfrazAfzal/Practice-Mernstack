// Question01: Create a number num with value.
// Now, print "good" if the number is divisible by 10 and print "bad"
// if it is not...

let num = 20
if (num %10 == 0){
    console.log("This is Good!");
}
else {
    console.log("This is bad!");
};

// Question02: Take the user's name & age as input using prompts.
// then return back the following statement to the user as an alert (by substiuting their name & age):
// name is age years old.
// using template literals
 
// let userName = prompt("Enter your name!");
// let userAge = prompt("Please Enter your age:");

// let pageAlert = alert(`${userName} is ${userAge} years old!`);
// console.log(pageAlert);

// Question03: Write a switch statement to print the months in quarter.
// use the number as case value in switch
let quarterMonth = 4;

switch(quarterMonth){
    case 1:
        console.log("January","February","March");
        break;
    case 2:
        console.log("April","May","June");
        break;
    case 3:
        console.log("July","August","September");
        break;
    default:
        console.log("October","November","December");
}

// Question04: A string is a golden String if starts with the character 'A' or 'a' and has a total lenght greater than 5.
// for a given string print if it is golden or not.
 
let stringCheck = "Hamad Ahmed";
if ( stringCheck[0] === "A" || stringCheck[0] === "a"){
    if (stringCheck.length > 5){
        console.log("This is golden string");
    }
}
else{
    console.log("This is not golden string");
};

// Question05: Write a program to find the largest of 3 numbers.

let num1 = 4;
let num2 = 7;
let num3 = 2;
if (num1 > num2 && num1 > num3){
    console.log('num1 is largest');
}
else if (num2 > num1 && num2 > num3){
    console.log("num2 is largest");
}
else {
    console.log("num3 is largest");
};

// Write a program to check if 2 numbers have the same last digit.
let number1 = 32;
let number2 = 47852;
if (number1 %10 && number2 %10){
    console.log("Both digit have same last digit");
}
else {
    console.log("Both digit have no same last digit");
};