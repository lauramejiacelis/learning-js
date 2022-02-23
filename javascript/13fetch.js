const fetch = require("isomorphic-fetch");

('{"key": value}'); // string --parse--> json
("flower.jgp"); // string --parse--> blob

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json()) // parse string -> obj
  .then((result) => console.log(result));
