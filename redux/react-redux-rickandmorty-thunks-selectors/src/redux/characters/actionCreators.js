import {GET_LOADING, GET_FAILURE, GET_CHARACTERS} from './actionTypes'

export function getLoading (){
    return {
        type: GET_LOADING,
    }
}

export function getCharacters(characters){
    return {
        type: GET_CHARACTERS,
        payload: characters,
    }
}

export function getError(error){
    return{
        type: GET_FAILURE,
        payload: error,
    }
}