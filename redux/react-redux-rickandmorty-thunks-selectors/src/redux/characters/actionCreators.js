import {
  GET_LOADING,
  GET_FAILURE,
  GET_CHARACTERS,
  GET_SINGLE_CHARACTER,
} from './actionTypes';

export function getLoading() {
  return {
    type: GET_LOADING,
  };
}

export function getCharacters(characters) {
  return {
    type: GET_CHARACTERS,
    payload: characters,
  };
}

export function getError(error) {
  return {
    type: GET_FAILURE,
    payload: error,
  };
}

export function getSingleCharacter(character) {
  return {
    type: GET_SINGLE_CHARACTER,
    payload: character,
  };
}
