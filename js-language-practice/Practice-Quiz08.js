// write an arrow function that returns the square of a number n:
const square1 = (n)=>{
    return(n*n);
};
square1(3);

// Write a function that prints "Hello world" 5 times at intervals of 2s each.
const id = setInterval(()=>{
    console.log("Hello World");
},2000);
setTimeout(()=>{
    clearInterval(id);
},12000);
