// 1. Write a JavaScript function that takes a callback 
// and invokes it after a delay of 2 second.

function displayText(){
    console.log('logging Call back with delay!')
}
function invokesFunction(callback){
    setTimeout(callback,2000);
}
invokesFunction(displayText);
