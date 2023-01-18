import { TODOS_ACTION_TYPES } from "./types";

const initialState = [];

let id = 0;

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.CREATE:
      id++;
      return [...state, { id, description: action.payload, status: "TO DO" }];
    case TODOS_ACTION_TYPES.EDIT:
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case TODOS_ACTION_TYPES.DELETE:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};
