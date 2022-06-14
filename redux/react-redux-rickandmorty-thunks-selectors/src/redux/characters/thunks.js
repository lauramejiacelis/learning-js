import { getCharactersApi, getSingleCharacterApi } from '../../services';
import {
  getLoading,
  getCharacters,
  getError,
  getSingleCharacter,
} from './actionCreators';
import { getCharactersSelector, getSingleCharacterSelector } from './selectors';

export const getCharactersThunk = () => (dispatch, getState) => {
  const state = getState();
  const characters = getCharactersSelector(state);
  console.log(characters);
  if (characters.length > 0) {
    return;
  }
  dispatch(getLoading());
  getCharactersApi()
    .then((characters) => {
      dispatch(getCharacters(characters));
    })
    .catch((err) => {
      dispatch(getError(err));
    });
};

export const getSingleCharacterThunk = (id) => (dispatch, getState) => {
  dispatch(getLoading());
  getSingleCharacterApi(id)
    .then((singleCharacter) => {
      dispatch(getSingleCharacter(singleCharacter));
    })
    .catch((err) => {
      dispatch(getError(err));
    });
};
