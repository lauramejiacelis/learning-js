import { TODOS_ACTION_TYPES } from './actionTypes';

const initialState = {
  todos: [],
  updateTodo: {},
};

let id = 0;

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.ADD_TODO:
      console.log('created todo', action.payload);
      id++;
      return {
        ...state,
        todos: [
          ...state.todos,
          { id, description: action.payload, isEditing: false },
        ],
      };

    case TODOS_ACTION_TYPES.DELETE_TODO:
      console.log('Delete');
      console.log(action.payload);
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case TODOS_ACTION_TYPES.EDIT_TODO:
      console.log('Edit');
      console.log(action.payload);
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                isEditing: true,
              }
            : todo
        ),
        updateTodo: action.payload,
      };

    case TODOS_ACTION_TYPES.CANCEL_EDIT:
      console.log('Cancel Edit');
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, isEditing: false } : todo
        ),
      };

    case TODOS_ACTION_TYPES.COMPLETE_EDIT:
      console.log('Complete Edit');
      console.log(action.payload);
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                isEditing: false,
                description: action.payload.description,
              }
            : todo
        ),
        updateTodo: {},
      };

    case TODOS_ACTION_TYPES.UPDATE_TODO:
      console.log('Updating Todo');
      console.log(action.payload);
      return {
        ...state,
        updateTodo: action.payload,
      };

    default:
      return state;
  }
};
