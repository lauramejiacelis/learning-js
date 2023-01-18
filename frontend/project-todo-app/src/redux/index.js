import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  userReducer,
} from './users/reducer';
import { todosReducer } from './todos/reducer';

const composeEnhancers =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const reducer = combineReducers({
  user: userReducer,
  todos: todosReducer,
});

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
