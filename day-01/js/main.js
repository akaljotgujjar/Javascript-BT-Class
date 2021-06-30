const tag = "button"; // string
const fontSize = 50; // number
const isActive = true; // boolean

const object = {
  tag: "h1",
  fontSize: "30px",
  isActive: true,
};

const array = [tag, fontSize, isActive];

// **how to create a button using javascript**
// create an element
const differentButton = document.createElement(object.tag);

// place element on the body
document.body.appendChild(differentButton);

// update the innerHTML of button
differentButton.innerHTML = "second button";

// create a variable that points to a different variable

const myButton = document.querySelector("#thisButton");
// const myButton = differentButton;

// changing styles on the button
myButton.style.color = "green";
myButton.style.fontSize = "50px";

//changing the text or html of a button
myButton.innerText = "Changed";
myButton.innerHTML = "Different";

myButton.addEventListener("click", function () {
  myButton.innerText = "Test";
});

console.log(array);

const fullName = "Akaljot Gujjar";
const favFood = "Thai food";

console.log(fullName);
console.log(favFood);
