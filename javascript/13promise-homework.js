// bring the pokemons names from "https://pokeapi.co/api/v2/pokemon/" using fetch
const fetch = require("isomorphic-fetch");

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((res) => (console.log(res), res))
  .then(({ results }) => results.map((element) => console.log(element.name)));
