import { TODOS_ACTION_TYPES } from './actionTypes';

export const addTodo = (description) => ({
  type: TODOS_ACTION_TYPES.ADD_TODO,
  payload: description,
});

export const editTodo = (data) => ({
  type: TODOS_ACTION_TYPES.EDIT_TODO,
  payload: data,
});

export const deleteTodo = (id) => ({
  type: TODOS_ACTION_TYPES.DELETE_TODO,
  payload: { id },
});

export const listTodos = (todos) => ({
  type: TODOS_ACTION_TYPES.LIST_TODOS,
  payload: todos,
});

export const getError = (err) => ({
  type: TODOS_ACTION_TYPES.GET_ERROR,
  payload: err,
});

export const getTodosLoading = () => ({
  type: TODOS_ACTION_TYPES.LOADING_TODOS,
});
