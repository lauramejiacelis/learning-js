/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
export function getCharactersApi() {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then(({ results }) =>
      results.map(({ id, name, status, species, origin, location, image }) => ({
        id,
        name,
        status,
        species,
        originName: origin.name,
        locationName: location.name,
        image,
      }))
    );
}
