// For the given string:
// trim and convert it into uppercase

let msg = "help!";
console.log(msg.trim);
console.log(msg.toUpperCase);

// Write a program to get first n elements of an arary.[n can bi any positive number].
// for example: for array [7,9,0,-2] and n=3
// print [7,9,0]
let arr1 = [7,9,0,-2];
console.log(arr1.slice(0,3));

// Write a program to get last n elements of an arary.[n can bi any positive number].
// for example: for array [7,9,0,-2] and n=3
// print [9,0,-2]
console.log(arr1.slice(1,4));

// Write a javascript programe to check whether a string is blank or not?
let str = "";
if(str.length==0){
    console.log("String is blank!")
}
else{
    console.log("String is not blank")
};
//  Write a JavaScript program to test whether the character at the given (character)
// index is lower case.
let str1 = "IamSarfraz";
let char = 4;
if(str1[char].toLowerCase() == str1[char]){
    console.log("character is lower case");
}
else{
    console.log("Character is not lowercase");
};
// Write a javascript programe to check an element exist in array or not?
let arr2 = ["sarfraz",34,2,64,32];
let element = 30;
if (arr2.indexOf(element) != -1){
    console.log("Element is present in the array");
}
else{
    console.log("Element is not present in the array");
}