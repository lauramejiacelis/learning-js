import { GET_LOADING, GET_CHARACTERS_SUCCESS, GET_FAILURE } from './types';

export const getLoading = () => ({
  type: GET_LOADING,
});

export const getError = (error) => ({
  type: GET_FAILURE,
  payload: error,
});

export const getCharactersSuccess = (characters) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: characters,
});
