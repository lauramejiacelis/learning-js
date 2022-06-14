import {
  GET_LOADING,
  GET_CHARACTERS,
  GET_FAILURE,
  GET_SINGLE_CHARACTER,
} from './actionTypes';

const initialStateLoading = false;

const initialStateCharacter = [];

const initialStateSingleCharacter = [];

const initialStateError = null;

export const loadingReducer = (state = initialStateLoading, action) => {
  switch (action.type) {
    case GET_LOADING:
      return true;
    case GET_CHARACTERS:
    case GET_FAILURE:
      return false;
    default:
      return state;
  }
};

export const charactersReducer = (state = initialStateCharacter, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return action.payload;
    case GET_FAILURE:
      return [];
    default:
      return state;
  }
};

export const errorReducer = (state = initialStateError, action) => {
  switch (action.type) {
    case GET_LOADING:
    case GET_CHARACTERS:
      return null;
    case GET_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export const singleCharacteReducer = (
  state = initialStateSingleCharacter,
  action
) => {
  switch (action.type) {
    case GET_SINGLE_CHARACTER:
      return action.payload;
    case GET_FAILURE:
      return [];
    default:
      return state;
  }
};
