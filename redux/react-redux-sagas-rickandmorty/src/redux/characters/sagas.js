import {getCharactersApi} from '../../services';
import {GET_LOADING} from './types';
import {getCharactersSuccess, getError} from './actionCreators';
import {call, put, takeEvery} from 'redux-saga/effects';

function* getCharacters(){
    try {
        const characters = yield call(getCharactersApi);
        yield put(getCharactersSuccess(characters))
    } catch (error) {
        yield put(getError())
    }
}

export function* charactersSagas(){
    yield takeEvery(GET_LOADING, getCharacters)
}