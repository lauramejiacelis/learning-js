import { TODOS_ACTION_TYPES } from './actionTypes';

const initialState = [];

let id = 0;

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.ADD_TODO:
      console.log('created todo', action.payload);
      id++;
      return [...state, { id, description: action.payload, isEditing: false }];

    case TODOS_ACTION_TYPES.DELETE_TODO:
      console.log('Delete');
      console.log(action.payload);
      return state.filter((todo) => todo.id !== action.payload.id);

    case TODOS_ACTION_TYPES.IS_EDITING:
      console.log('is editing reducer');
      console.log(action.payload);
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...state, isEditing: true } : todo
      );
    case TODOS_ACTION_TYPES.EDIT_TODO: //esto hay que mirarlo bien
      console.log('Edit');
      return state.map((todo) => {
        console.log(todo.id);
        console.log(todo.description);
        console.log(action.payload);
        console.log(action.payload.id);
        return todo.id === action.payload.id
          ? {
              ...todo,
              description: action.payload.description,
              isEditing: true,
            }
          : todo;
      });
    case TODOS_ACTION_TYPES.CANCEL_EDIT:
      console.log('Cancel Edit');
      return {
        ...state,
        isEditing: false,
      };
    default:
      return state;
  }
};
