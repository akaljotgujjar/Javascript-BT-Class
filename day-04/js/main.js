// * LOGIC * //

// if statements //
// if (true) {
//   console.log("A: this code runs if true");
// }

// // if / else statements //
// if (true) {
//   console.log("B:this code runs if true");
// } else {
//   console.log("B: this runs is false");
// }

// // if / else if / else statements //
// if (true) {
//   console.log("B:this code runs if true");
// } else if (true) {
//   console.log("B: this is second condition");
// } else {
//   console.log("C: this runs is false");
// }

// ternary //
// true
//   ? console.log("b1: this runs if ternary is true")
//   : console.log("b1: this runs if ternary is false");

// Switch Statement //
const favFood = "pizza";
switch (favFood) {
  case "pizza":
    console.log("I love pizza");
    break;
  case "Burgers":
    console.log("Burgers are my second favorite");
    break;
  case "Ice Cream":
    console.log("I like ice cream but not all the time");
    break;

  default:
    console.log("I never tried " + favFood + " before");
}
