import { call, put, takeEvery } from 'redux-saga/effects';
import * as TYPES from './types';
import {
    getPokemonsSuccess,
    getError
} from './actionCreators';
import { getPokemonsApi } from '../../pokemonsApi';

function* getPokemons(){
    try{
        const pokemons = yield call(getPokemonsApi);
        console.log(pokemons)
        yield put(getPokemonsSuccess(pokemons))
    } catch(error){
        return put(getError)
    }
}

export function* pokemonsSagas() {
    yield takeEvery(TYPES.GET_LOADING, getPokemons) //escuchar la acción
}
