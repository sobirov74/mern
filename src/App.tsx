import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Input from "./Components/Input";
import Navbar from "./Components/Navbar";
import TodoList from "./Components/TodoList";
import { ITodo } from "./Components/Interfaces";

declare var confirm:(confirmation: string) => boolean;
const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);


  useEffect(()=> {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    // setTodos(todos)
  }, [todos])


  const addHendler = (title: string) => {

    const newTodo = {
      title: title,
      id: Date.now(),
      complated: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const handleDelete = (id: number) => {
    const confirmation = confirm('Are you shure to delete this element?')
    // event.preventDefault();
    if(confirmation){
      setTodos((prev) => prev.filter((m) => m.id !== id));
      
    }
    
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.complated = !todo.complated;
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
          onDelete={handleDelete} 
          onToggle={handleToggle}
        />
      </div>
    </>
  );
};

export default App;
