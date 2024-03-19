// Create a Function to roll a dice and display the value:
function diceROll(){
    let roll = Math.floor(Math.random()*6)+1;
    console.log(roll);
}
diceROll();

// Create a function that gives average of 3 numbers:
let n = 3;
function avg(a,b,c){
    let sum = a+b+c;
    let average = sum/n
    console.log(average);
}
avg(4,56,3);

// Create a Funtion that prints the multiplication table of a number:
function Table(n){
    for(let i=0; i<=n*10; i+=n){
        console.log(i);
    };
};
Table(3);

// Create a Function that returns array elements larger than a number:
let arr = [1,2,4,5,7,8,10];
let num = 5;
function largerElement(){
    for(let i=0; i<=arr.length; i++){
        if(arr[i]>num){
            console.log(arr[i]);
        };
    };
};
largerElement(arr,num);

// Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”?
let str = "abcdabcdefgggh";
function getUnique(str){
    for(let i=0; i<str.length; i++){
        curchar = str[i];
        if(ans.indexof(curchar) == -1){
            ans += curchar;
        };
    };
};
return ans;
getUnique(str);