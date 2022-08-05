import {
  addTodo,
  deleteTodo,
  editTodo,
  listTodos,
  getError,
  getTodosLoading,
} from './actionCreators';
import { authFetch, getTodosApi } from '../../services/fetchs';
import { getTodosSelector } from './selectors';

export const addTodoThunk = (data) => (dispatch) => {
  authFetch('todos', data).then((todo) => {
    dispatch(addTodo(todo));
  });
};

export const getTodoThunk = () => (dispatch, getState) => {
  dispatch(getTodosLoading());
  getTodosApi()
    .then((todos) => {
      dispatch(listTodos(todos));
    })
    .catch((err) => {
      dispatch(getError(err));
    });
};

//review
export const deleteTodoThunk = (data) => (dispatch) => {
  authFetch('todos', data).then((todo) => {
    dispatch(deleteTodo(todo));
  });
};
