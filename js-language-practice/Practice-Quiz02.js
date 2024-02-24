//QuestionNo 01: Create a traffic light system that shows what to do 
// based on color.
 let lightColor = "Red";

 if(lightColor == "Green"){
    console.log("Vehical can move!")
 }
else if(lightColor == "Yellow"){
    console.log("start your engine")
 }
 else if(lightColor == "Red") {
    console.log("stop")
 };

//QuestionNo 02: Create a system to calculate popcorn prices based on
// the size customer asked for:
// if size is 'XL',price is Rs. 250
// if size is 'L',price is Rs. 200
// if size is 'M',price is Rs. 100
// if size is 'S',price is Rs. 50

let popcornSize = 'XL';

if (popcornSize === 'XL'){
    console.log('Price is Rs. 250');
}
else if (popcornSize === 'L'){
    console.log('Price is Rs. 200');
}
else if (popcornSize === 'M'){
    console.log('Price is Rs. 100');
}
else {
    console.log('Price is Rs. 50');
};

//QuestionNo 03: A "good string" is a string that starts with letter 'a' & has a lenght > 3.
// write a program ti find if a string good or not.

let str = "amir";
if ( (str[0] === 'a') && (str.length > 3)){
    console.log("string is good!");
}
else{
    console.log("string is bad!");
};