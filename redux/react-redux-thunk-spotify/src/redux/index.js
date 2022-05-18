import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import getArtistsreducer from './reducer';

const reducer = combineReducers({
    artists: getArtistsreducer,
})

export default createStore(reducer, applyMiddleware(thunkMiddleware));