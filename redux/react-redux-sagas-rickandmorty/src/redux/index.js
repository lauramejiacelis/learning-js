/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { charactersReducer, charactersSagas } from './characters';

const composeEnhancers =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  characters: charactersReducer,
});

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(charactersSagas);
