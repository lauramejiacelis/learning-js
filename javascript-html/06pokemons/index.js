var list = document.getElementById("pokemonList");

fetch(" https://pokeapi.co/api/v2/generation/1")
  .then((res) => res.json())
  .then(({ pokemon_species }) => pokemon_species.map(({ name }) => name))
  .then((names) => {
    names.forEach((name) => {
      var li = document.createElement("li");
      li.innerText = name;
      list.appendChild(li);
    });
  });

//TODO: implementar lista de movimiento de los pokemones cuando le den click al nombre
