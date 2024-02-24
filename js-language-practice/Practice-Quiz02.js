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

//QuestionNo 04: Use switch statement to print day of yhe week using a number
// variable 'day' values 1 to 7.
// 1=Monday ,2 Tuesday & so on
 let day = 6;
 switch (day){
    case 1:
        console.log("Today is Monday!");
        break;
    case 2:
        console.log("Today is Tuesday!");
        break;
    case 3:
        console.log("Today is Wednesday!");
        break;
    case 4:
        console.log("Today is Thurday!");
        break;
    case 5:
        console.log("Today is Friday!");
        break;
    case 6:
        console.log("Today is Saturday!");
        break;
    case 7:
        console.log("Today is Sunday!");
        break;
    default:
        console.log("Wrong day");
 }