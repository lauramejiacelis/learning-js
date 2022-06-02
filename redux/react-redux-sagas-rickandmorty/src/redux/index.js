/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  charactersReducer,
  charactersSagas,
  failureReducer,
  loadingReducer,
  oneCharacterReducer,
} from './characters';

const composeEnhancers =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const sagaMiddleware = createSagaMiddleware();

//const sagas = { charactersSagas, characterSagas };

const reducer = combineReducers({
  loading: loadingReducer,
  characters: charactersReducer,
  failure: failureReducer,
  character: oneCharacterReducer,
});

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(charactersSagas);
