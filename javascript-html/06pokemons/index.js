var list = document.getElementById("pokemonList");
var moveList = document.getElementById("movesList");
var pokemonName = "";

/*
fetch(" https://pokeapi.co/api/v2/generation/1")
  .then((res) => res.json())
  .then(({ pokemon_species }) => pokemon_species.map(({ name }) => name))
  .then((names) => {
    names.forEach((name) => {
      var li = document.createElement("li");
      li.innerText = name;
      list.appendChild(li);
    });
    list.addEventListener("click", function (event) {
      console.log(event.target.innerText)
      pokemonName = event.target.innerText;
      console.log(`Pokemon Name ${pokemonName}`)
      //aquí no daría por el entrar y salir de la promesa...
    })
    
  });

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then((res) => res.json())
  .then(({moves}) => moves.map(({move}) => move.name))
  .then((moveNames) => {
    moveNames.forEach((moveName) => {
      var li = document.createElement("li");
      li.innerText = moveName;
      moveList.appendChild(li);
    })
  });
  */
//TODO: implementar lista de movimiento de los pokemones cuando le den click al nombre

fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then((res) => res.json())
  .then(({ results }) => results.map((element) => element.name))
  .then((names) => {
    names.forEach((name) => {
      var li = document.createElement("li");
      li.innerText = name;
      list.appendChild(li);
    })})


list.addEventListener("click", function (event) {
  moveList.innerText = "";
  console.log(event.target.innerText)
  pokemonName = event.target.innerText;
  console.log(`Pokemon Name ${pokemonName}`)
  //aquí no daría por el entrar y salir de la promesa...
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then((res) => res.json())
  .then(({moves}) => moves.map(({move}) => move.name))
  .then((moveNames) => {
    var h1 = document.createElement("h1")
    h1.innerText = `Moves List of ${pokemonName}`
    moveList.appendChild(h1)
    moveNames.forEach((moveName) => {
      var li = document.createElement("li");
      li.innerText = moveName;
      moveList.appendChild(li);
    })
  });
})



