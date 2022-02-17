import React from "react";
import "./App.css";
import { useState } from "react";
import Input from "./Components/Input";
import Navbar from "./Components/Navbar";
import TodoList from "./Components/TodoList";
import { ITodo } from "./Components/Interfaces";
import Delete from "./Components/Delete";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHendler = (title: string) => {
    console.log("added title " + title);

    const newTodo = {
      title: title,
      id: Date.now(),
      complated: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((m) => m.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.complated = !todo.complated;

          // <Delete onDelete={handleDelete(todo.id)} />  `;
        }
        return todo;
      })
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Input onAdd={addHendler} />
        <TodoList
          todos={todos}
          // onDelete={handleDelete}
          onToggle={handleToggle}
        />
      </div>
    </>
  );
};

export default App;
