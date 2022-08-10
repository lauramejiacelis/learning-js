import { TODOS_ACTION_TYPES } from './actionTypes';

const initialState = [];

let id = 0;

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.ADD_TODO:
      console.log('created todo', action.payload);
      id++;
      return [...state, { id, description: action.payload }];
    case TODOS_ACTION_TYPES.DELETE_TODO:
      console.log('Delete');
      console.log(action.payload);
      return state.filter((todo) => todo.id !== action.payload.id);
    case TODOS_ACTION_TYPES.EDIT_TODO:
      console.log('Edit');
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    default:
      return state;
  }
};
