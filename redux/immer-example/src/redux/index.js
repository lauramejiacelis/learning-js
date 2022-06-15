import { createStore } from "redux";
import produce from "immer";

export const addTodo = (todo) => ({ type: "ADD_TODO", payload: todo });

const reducer = produce((state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      state.push(action.payload);
      break;
    default:
      return state;
  }
});

export default createStore(reducer);
