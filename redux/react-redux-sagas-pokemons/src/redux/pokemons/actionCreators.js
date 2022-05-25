import {
    GET_LOADING,
    GET_FAILURE,
    GET_POKEMONS_SUCCESS,
} from './types';

export const getLoading = () => ({
    type: GET_LOADING,
})

export const getError = (error) => ({
    type: GET_FAILURE,
    payload: error,
})

export const getPokemonsSuccess = (pokemons) => ({
    type: GET_POKEMONS_SUCCESS,
    payload: pokemons,
})