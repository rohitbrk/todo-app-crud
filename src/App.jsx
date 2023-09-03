import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { removeCompletedTodos } from "./utils/operations";

const ID = { id: 101 };

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editTodo, setEditTodo] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTodo.title) {
      const newTodos = todos.map((item) => {
        if (item.id === editTodo.id) {
          return { ...item, title: title, desc: desc };
        }
        return item;
      });
      setTodos((prev) => newTodos);
      setEditTodo((prev) => ({}));
    } else {
      ID.id++;
      const todo = { id: ID.id, completed: false, title: title, desc: desc };
      setTodos((prev) => [...prev, todo]);
    }
    setTitle("");
    setDesc("");
  };

  const handleEdit = (id) => {
    const findTodo = todos.find((item) => item.id === id);
    setEditTodo((prev) => findTodo);
    setTitle(findTodo.title);
    setDesc(findTodo.desc);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos((prev) => newTodos);
  };

  const handleComplete = (id) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos((prev) => newTodos);
  };

  return (
    <>
      <Header />
      <TodoForm
        title={title}
        desc={desc}
        setDesc={setDesc}
        setTitle={setTitle}
        handleSubmit={handleSubmit}
      />
      <TodoList
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
      <button onClick={() => removeCompletedTodos(todos, setTodos)}>
        Remove Completed
      </button>
      <Footer />
    </>
  );
}

export default App;
