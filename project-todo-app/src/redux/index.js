import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  loginErrorReducer,
  loginReducer,
  signinErrorReducer,
  signinReducer,
} from './users/reducer';
import { todosReducer } from './todos/reducer';

const composeEnhancers =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const reducer = combineReducers({
  signin: signinReducer,
  singinError: signinErrorReducer,
  login: loginReducer,
  loginError: loginErrorReducer,
  todos: todosReducer,
});

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
