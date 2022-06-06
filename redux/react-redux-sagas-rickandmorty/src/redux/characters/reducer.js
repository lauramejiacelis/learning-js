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

const initialStateLoading = {
  isloading: false,
};

const initialState = {
  characters: [],
};

const initialStateFailure = {
  error: null,
};

const initialStateOneCharacter = {
  character: [],
};
//duda con estos reducers
export const loadingReducer = (state = initialStateLoading, action) => {
  switch (action.type) {
    case GET_LOADING:
      return { ...state, isloading: true, error: null };
    default:
      return state;
  }
};

export const loadingReducerOne = (state = initialStateLoading, action) => {
  switch (action.type) {
    case GET_LOADING_ONE_CHARACTER:
      return { ...state, isloading: true, error: null, id: action.payload };
    default:
      return state;
  }
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        isloading: false,
        error: null,
        characters: action.payload,
      };
    default:
      return state;
  }
};

export const failureReducer = (state = initialStateFailure, action) => {
  switch (action.type) {
    case GET_FAILURE:
      return { ...state, isloading: false, error: action.payload };
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
      return {
        ...state,
        character: action.payload,
      };
    default:
      return state;
  }
};
