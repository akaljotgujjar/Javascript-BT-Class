const BASE_URL = "https://cat-fact.herokuapp.com";

const FACTS_ENDPOINT = "/facts";
const USERS_ENDPOINT = "/users";

fetch(BASE_URL + FACTS_ENDPOINT)
  .then((res) => {
    return res.json();
  })
  .then(function (facts) {
    const factsLength = facts.length;
    const randomNumber = Math.random() * factsLength;
    const flooredNumber = Math.floor(randomNumber);
    alert(facts[flooredNumber].text);
    // alert(facts[4]?.text);
  });
