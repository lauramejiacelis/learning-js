import { TODOS_ACTION_TYPES } from './actionTypes';

const initialState = {
  isEditing: false,
  todos: [],
};

let id = 0;

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.ADD_TODO:
      console.log('created todo', action.payload);
      id++;
      return {
        ...state,
        isEditing: false,
        todos: [...state.todos, { id, description: action.payload }],
      };
    case TODOS_ACTION_TYPES.DELETE_TODO:
      console.log('Delete');
      console.log(action.payload);
      return {
        isEditing: false,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TODOS_ACTION_TYPES.EDIT_TODO:
      console.log('Edit');
      return {
        isEditing: true,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
};
