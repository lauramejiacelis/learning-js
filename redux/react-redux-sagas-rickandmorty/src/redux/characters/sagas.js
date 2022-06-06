/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { call, put, takeEvery } from 'redux-saga/effects';
import { getCharactersApi, getOneCharacter } from '../../services';
import { GET_LOADING, GET_LOADING_ONE_CHARACTER } from './types';
import {
  getCharactersSuccess,
  getError,
  getOneCharacterSuccess,
  getLoadingOneCharacter,
} from './actionCreators';

function* getCharacters() {
  try {
    const characters = yield call(getCharactersApi);
    console.log(characters);
    yield put(getCharactersSuccess(characters));
  } catch (error) {
    yield put(getError());
  }
}

function* getCharacter(id) {
  try {
    const character = yield call(getOneCharacter, id);
    console.log(character);
    yield put(getOneCharacterSuccess(character));
  } catch (error) {
    yield put(getError());
  }
}

export function* charactersSagas() {
  yield takeEvery(GET_LOADING, getCharacters);
  yield takeEvery(GET_LOADING_ONE_CHARACTER, getCharacter, 1);
}
