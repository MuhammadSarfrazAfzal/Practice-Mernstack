// 1. Write a JavaScript function that takes a callback 
// and invokes it after a delay of 2 second.

function displayText(){
    console.log('logging Call back with delay!')
}
function invokesFunction(callback){
    setTimeout(callback,2000);
}
invokesFunction(displayText);

// 2. Write a JavaScript program that converts 
// a callback-based function to a Promise-based function.

function saveData(data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed>5){
        success();
    }
    else{
        failure();
    }
}
// Callback hell:
saveData("Hello: This is data 1",
    ()=>{
        console.log("Success:Data 1 is saved");
        saveData(
            "Hello: This is data 2",
            ()=>{
                console.log("Success:Data 2 is saved")
                saveData(
                    "Hello: This is data 3",
                    ()=>{
                        console.log("Success:Data 3 is saved")
                    },
                    ()=>{
                        console.log("Failure:Connection is weak")
                    }
                )
            },
            ()=>{
                console.log("Failure:Connection is weak")
            }
        )
    },
    ()=>{
        console.log("Failure:Connection is weak");
});
