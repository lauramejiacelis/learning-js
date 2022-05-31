/* eslint-disable indent */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { GET_LOADING, GET_CHARACTERS_SUCCESS, GET_FAILURE } from './types';

const initialState = {
  characters: [],
  isloading: false,
  error: null,
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOADING:
      return { ...state, isloading: true, error: null };
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        isloading: false,
        error: null,
        characters: action.payload,
      };
    case GET_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};
