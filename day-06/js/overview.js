const appName = "cool app";
const version = 1.1;
const production = false;

const favoriteVariables = [appName, version, production];
const array = { length: 0, 0: appName, 1: version, 2: production };

const favoriteVariables2 = {
  favoriteString: appName,
  favoriteNumber: version,
  favoriteBoolean: production,
};

function myFunction(text, number) {
  const name = "boy";
  console.log(name, number, text);
}

myFunction('test1', 0.5);

