const todos = [{ description: "mercar", status: "done" }];

export const getTodosApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todos);
    }, 2000);
  });
};

export const addTodosApi = (todo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      todos.push(todo);
      resolve({ status: "ok" });
    }, 2000);
  });
};
