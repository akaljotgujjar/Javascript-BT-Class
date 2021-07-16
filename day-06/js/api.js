function getPokemonByName(name) {
  const base_url = "https://pokeapi.co/api/v2/pokemon/";

  fetch(base_url + name)
    .then((res) => {
      return res.json();
    })
    .then((facts) => {
      console.log(facts);
      const h1 = document.createElement("h1");
      document.body.appendChild(h1);
      h1.innerText = facts.name;

      const img = document.createElement("img");
      document.body.appendChild(img);
      img.src = facts.sprites.front_default;
      img.width = "400";
    });
}

getPokemonByName("charizard");

function getPokemonList() {
  const base_url = "https://pokeapi.co/api/v2/pokemon/?offset=43&limit=10";

  fetch(base_url)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((pokemon) => {
        const button = document.createElement("button");
        document.body.appendChild(button);
        button.innerText = pokemon.name;
        button.addEventListener("click", () => {
          getPokemonByName(pokemon.name);
        });
      });
    });
}

getPokemonList();
