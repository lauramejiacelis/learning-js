import { TODOS_ACTION_TYPES } from './actionTypes';

const initialState = [];

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.ADD_TODO:
      return [...state, action.payload];
    case TODOS_ACTION_TYPES.EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? action.payload.id : todo
      );
    case TODOS_ACTION_TYPES.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};
