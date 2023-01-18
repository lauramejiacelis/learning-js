export const getTodosSelector = (state) => state.todos.todos;

export const isEditingSelector = (state) => state.todos.todos.isEditing;

export const updateTodoSelector = (state) => state.todos.updateTodo;
