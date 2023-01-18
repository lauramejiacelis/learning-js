import { Box } from '@chakra-ui/react';

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

export function getSingleCharacterApi(id) {
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
      created: results.created,
    }));
}

const MAP_STATUS = {
  Alive: 'green',
  Dead: 'red',
  unknown: 'darkgrey',
};

export function CircleStatus({ status }) {
  return <Box h={3} w={3} borderRadius={50} bg={MAP_STATUS[status]} />;
}
