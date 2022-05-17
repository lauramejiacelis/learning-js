import {
  getCharacterLoading,
  getCharacterSuccess,
  getCharacterError,
} from "./actionCreators";
import { getCharacterSelector } from "./selectors";

function getCharactersApi() {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then(({ results }) => results);
}

export const getCharactersThunk = () => (dispatch, getState) => {
  const state = getState();
  const characters = getCharacterSelector(state);
  console.log(characters);
  if (characters.length > 0) {
    return;
  }
  // setTimeout is for demostration only
  dispatch(getCharacterLoading());
  setTimeout(() => {
    getCharactersApi()
      .then((characters) => {
        dispatch(getCharacterSuccess(characters));
      })
      .catch((err) => {
        dispatch(getCharacterError(err));
      });
  }, 1000);
};
