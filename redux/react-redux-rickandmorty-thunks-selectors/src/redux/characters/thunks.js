import {getCharactersApi} from '../../services'
import { getLoading, getCharacters, getError} from './actionCreators'
import {getCharactersSelector} from './selectors'

export const getCharactersThunk = () => (dispatch, getState) => {
    const state = getState();
    const characters = getCharactersSelector(state);
    console.log(characters);
    if (characters.length>0){
        return;
    }
    dispatch(getLoading());
    getCharactersApi()
        .then((characters)=>{
            dispatch(getCharacters(characters))
        })
        .catch((err)=>{
            dispatch(getError(err))
        })
}