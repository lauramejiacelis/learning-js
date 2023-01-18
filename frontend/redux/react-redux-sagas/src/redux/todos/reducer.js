import * as TYPES from "./types";

const initialState = [];

export function todosReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case TYPES.GET_TODOS_SUCCESS:
      return action.payload;
    case TYPES.ADD_TODOS_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
}
