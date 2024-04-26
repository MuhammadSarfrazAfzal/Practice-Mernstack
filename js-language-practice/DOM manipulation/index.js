// Qsl. Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me'

let btn = document.createElement("Button");
btn.innerHTML = "Click me!";
btn.setAttribute("id","button")
let body = document.querySelector("body");
body.append(btn);

//  Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'
let attribute = document.querySelector("input");
attribute.getAttribute("placeholder");
attribute.setAttribute("placeholder","username");

// Qs3. Access the btn using the querySelector and button id. Change the button background 
// color to blue and text color to white.
let btn1 = document.querySelector("Button")
btn1.getAttribute("id");
btn1.setAttribute("id","btn");

// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. 
// Change its color to purple.
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice!";
body.append(h1);
let heading = document.querySelector("h1");
heading.setAttribute("id","h1");

// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold.
let p = document.createElement("p");
p.innerHTML = "<b>Mern stack</b> practice";
body.append(p);