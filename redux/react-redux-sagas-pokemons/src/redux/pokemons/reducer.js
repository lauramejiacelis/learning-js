import {
    GET_LOADING,
    GET_FAILURE,
    GET_POKEMONS_SUCCESS,
} from './types';

const initialState = {
    pokemons: [],
    isloading: false,
    error: null,
};

export const getPokemonsreducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LOADING:
            return {...state, isloading: true, error: null}
        case GET_POKEMONS_SUCCESS:
            return {...state, isloading: false, pokemons: action.payload.pokemons}
        case GET_FAILURE:
            return {...state, isloading:false, error:action.payload}
        default:
            return state;
    }
}