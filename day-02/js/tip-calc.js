// Changing the title in the tab
document.title = "Tip Calculator";

// changing the h1 from the html file
const h1 = document.querySelector("h1");
h1.innerText = "Tip Calculator";

// created a input box | created a placeholder | made it only to a number
const totalInput = document.createElement("input");
totalInput.type = "number";
totalInput.placeholder = "Enter Total";

// created a input box | created a placeholder | made it only to a number
const percentageInput = document.createElement("input");
percentageInput.type = "number";
percentageInput.placeholder = "What percent?";

// created a button | named it tip
const tipButton = document.createElement("button");
tipButton.innerHTML = "Tip";

// added input boxes and button to the html file
document.body.appendChild(totalInput);
document.body.appendChild(percentageInput);
document.body.appendChild(tipButton);

tipButton.addEventListener("click", function () {
  console.log("click");

  const total = Number(totalInput.value);
  const percent = Number(percentageInput.value);

  console.log((percent / 100) * total);
  h1.innerText = "$" + (percent / 100) * total;
});
