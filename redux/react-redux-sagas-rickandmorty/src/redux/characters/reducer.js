/* eslint-disable indent */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import {
  GET_LOADING,
  GET_CHARACTERS_SUCCESS,
  GET_FAILURE,
  GET_ONE_CHARACTER_SUCCESS,
  GET_LOADING_ONE_CHARACTER,
} from './types';

const initialStateLoading = false;

const initialState = [];

const initialStateFailure = null;

const initialStateOneCharacter = {};

//duda con estos reducers
export const loadingReducer = (state = initialStateLoading, action) => {
  switch (action.type) {
    case GET_LOADING:
    case GET_LOADING_ONE_CHARACTER:
      return true;
    case GET_CHARACTERS_SUCCESS:
    case GET_ONE_CHARACTER_SUCCESS:
    case GET_FAILURE:
      return false;
    default:
      return state;
  }
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_SUCCESS:
      return action.payload;
    case GET_FAILURE:
      return [];
    default:
      return state;
  }
};

export const errorReducer = (state = initialStateFailure, action) => {
  switch (action.type) {
    case GET_FAILURE:
      return  action.payload;
    case GET_LOADING:
    case GET_LOADING_ONE_CHARACTER:
    case GET_CHARACTERS_SUCCESS:
    case GET_ONE_CHARACTER_SUCCESS:
      return null;
    default:
      return state;
  }
};

export const oneCharacterReducer = (
  state = initialStateOneCharacter,
  action
) => {
  switch (action.type) {
    case GET_ONE_CHARACTER_SUCCESS:
      return action.payload;
    case GET_FAILURE:
      return {};
    default:
      return state;
  }
};
