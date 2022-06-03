import {
  GET_LOADING,
  GET_CHARACTERS_SUCCESS,
  GET_FAILURE,
  GET_LOADING_ONE_CHARACTER,
  GET_ONE_CHARACTER_SUCCESS,
} from './types';

export const getLoading = () => ({
  type: GET_LOADING,
});

export const getLoadingOneCharacter = (id) => ({
  type: GET_LOADING_ONE_CHARACTER,
  payload: id,
});

export const getError = (error) => ({
  type: GET_FAILURE,
  payload: error,
});

export const getCharactersSuccess = (characters) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: characters,
});

export const getOneCharacterSuccess = (character) => ({
  type: GET_ONE_CHARACTER_SUCCESS,
  payload: character,
});
