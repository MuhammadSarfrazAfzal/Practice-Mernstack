// Write a Js program to delete all occurrences of element 'num' inn a given array:
// num = 2
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i=0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
};
console.log(arr);
// Write a js Program  to find the no of digits in a number.
// count = 6
let number = 287152;
let count = 0