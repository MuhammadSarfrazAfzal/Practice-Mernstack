// 1. Write a JavaScript program that creates a button and
//add a click event listener to log a message when it's clicked.

let btn = document.createElement('button');
let body = document.querySelector('body');
body.append(btn);
btn.innerText = "Click Me!"
btn.setAttribute('class','btn');
function sayClick(){
    console.log("it's clicked.");
};
btn.addEventListener('click',sayClick);

// 2. Write a JavaScript program to create a dropdown menu 
// that shows and hides its options when clicked.
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownOptions = document.querySelector('.dropdown-options');
    dropdownButton.addEventListener('click', () => {
    dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
});

// 3. Write a JavaScript function that changes the background color
//  of an element when a mouse enters it.
function backgroundChange(){
    btn.style.backgroundColor = 'green';
}
