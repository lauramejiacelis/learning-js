import { createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { getPokemonsreducer, pokemonsSagas} from './pokemons';

const composeEnhancers =
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const sagaMiddleware = createSagaMiddleware();

//const sagas= pokemonsSagas;

const reducer = combineReducers({
    pokemons: getPokemonsreducer,
});

export default createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(pokemonsSagas);