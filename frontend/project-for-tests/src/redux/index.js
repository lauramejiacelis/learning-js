import { createStore, combineReducers } from 'redux';
import { todosReducer } from './todos/reducer';

const reducer = combineReducers({
  todos: todosReducer,
});

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
