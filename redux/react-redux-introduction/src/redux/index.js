import { createStore, combineReducers } from "redux";
import { todoReducer } from "./todos";

const reducer = combineReducers({
  todos: todoReducer,
});

const store = createStore(reducer);

export default store;
