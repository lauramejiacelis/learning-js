export function getPokemonsApi() {
  return fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((res) => res.json())
    .then(({ results }) => results.map(({ name }) => name));
}
