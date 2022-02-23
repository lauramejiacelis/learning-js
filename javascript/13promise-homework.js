// bring the pokemons names from "https://pokeapi.co/api/v2/pokemon/" using fetch
const fetch = require("isomorphic-fetch");

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res)=> res.json())
    //.then((result) => console.log(result.results))
    .then((result) => result.results)
    .then((arr) => arr.forEach(element => console.log(element.name)))
