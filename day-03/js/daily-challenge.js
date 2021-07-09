// ** DAILY CHALLENGE** //

// Ask for the user's first name
// store their input to a variable
// Reverse name
// Alert the reversed name

// Answer 1 //
// const firstName = prompt("What is your first name?");
// const firstNameFlipped = firstName.split("").reverse().join("");
// alert(firstNameFlipped);

// *BONUS*
// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result

// Answer 2 //
// const number1 = parseInt(prompt("number 1?", 10));
// const number2 = parseInt(prompt("number 2?", 10));
// alert(number1 + number2);

// Ask for the user's first name
// const firstName = prompt("What is your first name?");
// Ask for the user's last name
// const lastName = prompt("What is your last name?");
// Log the user's first name to the console
// console.log(firstName);
// Alert the user's last name
// alert(lastName);

// *BONUS*
// Ask for the user's birthday
const bDay = prompt('What is your birthday?')
// Ask the user to confirm their birthday input
const correctBday = confirm(bDay + '. Is this correct?');
// Alert the user's birthday
if (correctBday) {
    alert(bDay); 
} else {
    alert('incorrect birthday')
}

