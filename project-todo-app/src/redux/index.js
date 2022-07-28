import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  loginErrorReducer,
  loginReducer,
  signInErrorReducer,
  signInReducer,
} from './users/reducer';
import { todosReducer } from './todos/reducer';

const composeEnhancers =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const reducer = combineReducers({
  signin: signInReducer,
  singinError: signInErrorReducer,
  login: loginReducer,
  loginError: loginErrorReducer,
  todos: todosReducer,
});

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
