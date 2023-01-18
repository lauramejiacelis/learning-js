export const getTodosSelector = (state) => state.todos;

export const getTodosByStatus = (status) => (state) =>
  state.todos.filter((todo) => todo.status === status);

export const countTodosByStatus = (status) => (state) =>
  getTodosByStatus(status)(state).length;
