export const getCharactersSelector = (state) => state.characters;

export const loadingSelector = (state) => state.loading;

export const errorSelector = (state) => state.error;

export const getCharactersByStatus = (status) => (state) =>
  state.characters.filter((character) => character.status === status);

export const getSingleCharacterSelector = (state) => state.character;
