const TodoForm = ({ title, setTitle, desc, setDesc, handleSubmit }) => {
  return (
    <div id="todoform">
      TodoForm
      <form onSubmit={handleSubmit} className="form">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle((prev) => e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc((prev) => e.target.value)}
          />
        </label>
        <input type="submit" id="submit" />
      </form>
    </div>
  );
};

export default TodoForm;
