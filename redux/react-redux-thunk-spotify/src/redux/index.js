import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {getArtistsreducer, getAlbumsreducer} from './reducer';

const reducer = combineReducers({
    artists: getArtistsreducer,
    albums: getAlbumsreducer,
})

export default createStore(reducer, applyMiddleware(thunkMiddleware));