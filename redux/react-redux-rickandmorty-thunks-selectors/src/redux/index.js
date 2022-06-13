import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk';
import {charactersReducer, loadingReducer, errorReducer} from './characters'

const composeEnhancers =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const reducer = combineReducers({
    loading: loadingReducer,
    characters: charactersReducer,
    error: errorReducer
})

export default createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
)