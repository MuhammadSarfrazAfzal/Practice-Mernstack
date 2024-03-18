// Create a program that generates a random number representing a dice roll
let diceROll = Math.floor(Math.random()*6)+1;
console.log(diceROll);

// Create a Object representing a car that stores the following properties;
// car name ,model and then print car name:
let car = {
    Name:"Supra MK4",
    Model:2016,
    Color:"Black"
};
console.log(car.Name);

// Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States
let Person =  {Name:"Sarfraz",age:21,city:"Gujrat"};
Person.city = "New York";
Person.Country = "United States";
console.log(Person.city);
console.log(Person);
