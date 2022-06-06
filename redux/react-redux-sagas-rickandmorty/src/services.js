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

//Revisar que esto no necesita results... revisar insomnia
export function getOneCharacter(id) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((results) => ({
        name: results.name,
        status: results.status,
        species: results.species,
        gender: results.gender,
        origin: results.origin.name,
        location: results.location.name,
        image: results.image,
        created: results.created
      }));
  }
