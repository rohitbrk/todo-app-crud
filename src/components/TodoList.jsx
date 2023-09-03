const TodoList = ({ todos, handleEdit, handleDelete, handleComplete }) => {
  return (
    <div id="todolist">
      {todos.length > 0
        ? todos.map((item) => {
            return (
              <li key={item.id} className="card">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleComplete(item.id)}
                />
                <span>
                  {item.title} - {item.desc}
                </span>
                <br />
                <button onClick={() => handleEdit(item.id)}>edit</button>
                <button onClick={() => handleDelete(item.id)}>delete</button>
              </li>
            );
          })
        : "No Todos. Add one."}
    </div>
  );
};

export default TodoList;
