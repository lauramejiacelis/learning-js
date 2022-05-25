import { call, put, takeEvery } from 'redux-saga/effects';
import * as TYPES from './types';
import {
    getPokemonsSuccess,
    getError
} from './actionCreators';
import { getPokemonsApi } from '../../pokemonsApi';

function* getPokemons(){
    try{
        debugger;
        yield call(getPokemonsApi);
        //console.log(`we're on getPokemons ${pokemons}`)
        return yield put(getPokemonsSuccess)
    } catch(error){
        return put(getError)
    }
}

export function* pokemonsSagas() {
    yield takeEvery(TYPES.GET_POKEMONS_SUCCESS, getPokemons)
}
