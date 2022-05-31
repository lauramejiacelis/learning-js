import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
    charactersReducer,
    charactersSagas
} from './characters';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    characters: charactersReducer,
})

export default createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(charactersSagas)