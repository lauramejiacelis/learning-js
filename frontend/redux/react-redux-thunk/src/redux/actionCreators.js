import {
  GET_CHARACTERS_LOADING,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_FAILURE,
} from "./types";

export const getCharacterSuccess = (characters) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: characters,
});

export const getCharacterError = (error) => ({
  type: GET_CHARACTERS_FAILURE,
  payload: error,
});

export const getCharacterLoading = () => ({
  type: GET_CHARACTERS_LOADING,
});
