import { TODOS_ACTION_TYPES } from './actionTypes';

const initialState = {
  todos: {}, //dudo con este
  isLoading: false,
  error: null,
};
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

//let id = 0;

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.ADD_TODO:
      console.log('created todo', action.payload);
      console.log(state);
      //id++;
      return { ...state, todos: { description: action.payload } }; //review how to handle data.description
    case TODOS_ACTION_TYPES.EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? action.payload.id : todo
      );
    case TODOS_ACTION_TYPES.DELETE_TODO:
      return {
        ...state,
        todos: state.data.filter((todo) => todo.id !== action.payload.id),
      }; //review
    case TODOS_ACTION_TYPES.LIST_TODOS:
      console.log('listing todos');
      return { ...state, isLoading: false, todos: action.payload };
    case TODOS_ACTION_TYPES.GET_ERROR:
      console.log('error getting todos');
      return { ...state, isLoading: false, error: action.payload };
    case TODOS_ACTION_TYPES.LOADING_TODOS:
      console.log('is loading');
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
};
