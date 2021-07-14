// global

const menu = [];

function createHeader() {
  // functional scope
  const header = document.createElement("h1");
  document.body.appendChild(header);
  header.innerText = "Restaurant";
}

createHeader();

function getBread() {
  return getPantryItem("bread");
}

function getPB() {
  return getPantryItem("peanut butter");
}

function getPantryItem(item) {
  console.log("go to pantry and get " + item);
  return item;
}

menu.push(
  {
    name: "PBJ Sandwich",
    price: 20.99,
    description: "creamy peanut butter and sweet jam",
    steps: function () {
      getBread();
      getPB();
    },
  },
  {
    name: "Turkey Sandwich",
    price: 30.99,
    description: "pretty bird",
    steps: function () {
      getBread();
    },
  }
);

function createMenu() {
  const listElement = document.createElement("ol");
  document.body.appendChild(listElement);
  menu.forEach((foodItem) => {
    const li = document.createElement("li");
    listElement.appendChild(li);
    li.innerText = `${foodItem.name} - ${foodItem.price} 
        Description: ${foodItem.description}
    `;

    li.addEventListener("click", () => {
      foodItem.steps();
    });
  });
}

createMenu();
