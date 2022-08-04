import {
  addTodo,
  deleteTodo,
  editTodo,
  listTodos,
  getError,
} from './actionCreators';
import { authFetch, getTodosApi } from '../../services/fetchs';
import { getTodosSelector } from './selectors';

export const addTodoThunk = (data) => (dispatch, getState) => {
  const state = getState();

  authFetch('todos', data).then((todo) => {
    dispatch(addTodo(todo));
  });
};

export const getTodoThunk = () => (dispatch, getState) => {
  //const state = getState();
  //const todos = getTodosSelector(state);
  getTodosApi()
    .then((todos) => {
      dispatch(listTodos(todos));
    })
    .catch((err) => {
      dispatch(getError(err));
    });
};
