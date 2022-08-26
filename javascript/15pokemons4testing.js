const fetch = require("isomorphic-fetch");

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .then(({ results }) => results.map((result) => console.log(result.name)));
