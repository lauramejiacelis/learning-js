import { TODOS_ACTION_TYPES } from "./types";

export const addTodo = (description) => ({
  type: TODOS_ACTION_TYPES.CREATE,
  payload: description,
});

export const deleteTodo = (id) => ({
  type: TODOS_ACTION_TYPES.DELETE,
  payload: { id },
});

export const editTodo = (data) => ({
  type: TODOS_ACTION_TYPES.EDIT,
  payload: data,
});
