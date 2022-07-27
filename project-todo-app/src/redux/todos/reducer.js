import { TODOS_ACTION_TYPES } from './actionTypes';

const initialState = [];
/* data: [
    {
      description: 'find something',
      id: 116,
    },
    {
      description: 'do homework',
      id: 117,
    },
    {
      description: 'clean house',
      id: 118,
    },
  ], */

/* export const todosReducer = (state = initialState, action) => {
  return state;
}; */

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.ADD_TODO:
      console.log('created todo', action.payload);
      console.log(state);
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
