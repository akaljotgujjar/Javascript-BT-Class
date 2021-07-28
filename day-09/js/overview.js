const appName = "App";
let score = 0;
var test = false;

const falseyGroup = [false, "", 0, undefined, null, NaN];
const truthyGroup = ["everything else"]; // everything else is true

const user1 = {
    username: 'jim',
    falseyGroup: falseyGroup,
    truthyGroup: truthyGroup,
    score: score
}

const user2 = {
    username: 'joe',
    falseyGroup: falseyGroup,
    truthyGroup: truthyGroup,
    score: score
}

// DRY

displayUser(user);
displayUser(user2);

function displayUser(user) {
  const li1 = document.createElement("li");
  document.body.appendChild(li1);
  li1.innerText = user.username;
}
