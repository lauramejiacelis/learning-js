import { addTodo, deleteTodo, editTodo } from './actionCreators';

import { getTodosSelector } from './selectors';

export const getTodosThunk = () => (dispatch, getState) => {
  const state = getState();
  const todos = getTodosSelector(state);
  dispatch(addTodo());
};
