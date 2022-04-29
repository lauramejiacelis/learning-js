const { createStore, combineReducers } = require("redux");

const userInitialState = {
  name: "",
  lastname: "",
  age: null,
};

const USER_ACTION_TYPES = {
  ADD_USER_NAME: "ADD_USER_NAME",
  ADD_USER_LASTNAME: "ADD_USER_LASTNAME",
  ADD_USER_AGE: "ADD_USER_AGE",
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.ADD_USER_NAME:
      return { ...state, name: action.payload };
    case USER_ACTION_TYPES.ADD_USER_LASTNAME:
      return { ...state, lastname: action.payload };
    case USER_ACTION_TYPES.ADD_USER_AGE:
      return { ...state, age: action.payload };
    case "RESET":
      return userInitialState;
    default:
      return state;
  }
};

/*
 * TODOS actions:
 *
 * Types:
 *
 * Add
 * Edit
 * Delete
 * Change Status
 *
 * Payload:
 *
 * description: string
 * status: [pending, in progress, done]
 */

const TODOS_ACTION_TYPES = {
  ADD: "ADD",
  EDIT: "EDIT",
  DELETE: "DELETE",
  CHANGE_STATUS: "CHANGE_STATUS",
};

const TODO_STATUS = {
  PENDING: "PENDING",
  IN_PROGRESS: "IN_PROGRESS",
  DONE: "DONE",
};

const todosInitialState = [];
let id = -1;

// State behaviour
const todosReducer = (state = todosInitialState, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.ADD:
      id++;
      return [
        ...state,
        { id, description: action.payload, status: TODO_STATUS.PENDING },
      ]; // Create TODO
    case TODOS_ACTION_TYPES.EDIT:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, description: action.payload.description };
        }
        return todo;
      });
    case TODOS_ACTION_TYPES.DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    case TODOS_ACTION_TYPES.CHANGE_STATUS:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, status: action.payload.status };
        }
        return todo;
      });
    case "RESET":
      return todosInitialState;
    default:
      return state;
  }
};

const reducer = combineReducers({
  todos: todosReducer,
  user: userReducer,
});

const store = createStore(reducer);

// Print store?
console.log(store.getState());

// Add first todo
store.dispatch({ type: TODOS_ACTION_TYPES.ADD, payload: "mercar" }); // Throw action
console.log(store.getState());

store.dispatch({ type: USER_ACTION_TYPES.ADD_USER_NAME, payload: "Laura" });
console.log(store.getState());

store.dispatch({ type: TODOS_ACTION_TYPES.ADD, payload: "bailar" });
console.log(store.getState());

store.dispatch({
  type: TODOS_ACTION_TYPES.EDIT,
  payload: { id: 0, description: "pagar servicios" },
});
console.log(store.getState());

store.dispatch({
  type: TODOS_ACTION_TYPES.DELETE,
  payload: 1,
});
console.log(store.getState());

store.dispatch({
  type: TODOS_ACTION_TYPES.CHANGE_STATUS,
  payload: { id: 0, status: TODO_STATUS.DONE },
});
console.log(store.getState());

store.dispatch({ type: USER_ACTION_TYPES.ADD_USER_LASTNAME, payload: "Mejia" });
console.log(store.getState());

store.dispatch({ type: USER_ACTION_TYPES.ADD_USER_AGE, payload: 15 });
console.log(store.getState());

store.dispatch({ type: "RESET" });
console.log(store.getState());
/*
 * 1. Immutable state changes (each state is individual and not affected by other state changes)
 * 2. Pure functions (don't depend on outside things)
 * */
