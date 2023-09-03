const removeCompletedTodos = (todos, setTodos) => {
  const newTodos = todos.filter((item) => item.completed !== true);
  setTodos((prev) => newTodos);
};

export { removeCompletedTodos };
