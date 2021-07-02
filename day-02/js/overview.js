// *Primitive Values* //

const strings = `yellow`;
// different use of a variable; in this case, we are using a number | we are able to use let if we want to change something later on.
let score = 0;
const boolean = false;
score = 100;

// *Organizational | Grouping of values* //
const objects = {
  strings: strings,
  score: score,
  boolean: boolean,
  body: {
    style: {
      backgroundColor: "blue",
      color: "white",
    },
  },
  favoriteFoods: [{}],
};

console.log(objects);

// *Array* //
const array = [strings, score, boolean, objects];

// accessing the HTML document, accessing the body tag, adding a style, assigning a background color to the body tag, assigning the color green to the body tag
document.body.style.backgroundColor = "pink";

// creating a variable and accessing a certain tag in the html. then giving it a style change. Then using innerText to change the text of the original h1 tag to a different thing
const test = document.querySelector("h1");
test.style.fontSize = score + "px";
// test.style.backgroundColor = objects.body.style.backgroundColor;
// test.style.color = objects.body.style.color;
test.innerText = strings;

// different way to access the object and have everything done in one go
for (let style in objects.body.style) {
  test.style[style] = objects.body.style[style];
}

score += 5;
score -= 7;
score *= 4;
score /= 4;
score %= 2;

const values = [5 + 5, 5 - 3, 5 * 2, 10 / 2, 10 % 3];
console.log(score);
