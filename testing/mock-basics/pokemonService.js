const axios = require("axios");

const service = {
    fetchPokemons() {
        return axios
            .get("https://pokeapi.co/api/v2/pokemon/")
            .then(({ data }) => data);
    },
};

const getPokemonNames = () => {
    return service
        .fetchPokemons()
        .then(({ results }) => results.map(({ name }) => name));
};

module.exports = {
    getPokemonNames,
    service,
};
