import React from "react";
import { ITodo } from "./Interfaces";

type todoListProps = {
  todos: ITodo[];
  onDelete(id: number): void;
  onToggle(id: number): void;
};


const TodoList: React.FC<todoListProps> = ({ todos, onDelete, onToggle }) => {
  if (todos.length === 0) {
    return <p className="center">The table is empty</p>;
  }




  const handleDelete = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onDelete(id);
  };


  return (
    <ul>
      <h5>
        Number of elements <span className="lengthSize">{todos.length}</span>
      </h5>
      {todos.map((todo) => {
        const classes = ["todo"];

        if (todo.complated) {
          classes.push("complated");
        }

        return (
          <>
            <li key={todo.id} className={classes.join(" ")}>
              <label>
                <input
                  placeholder="input to add"
                  type="checkbox"
                  checked={todo.complated}
                  onChange={onToggle.bind(null, todo.id)}
                />
                <span>{todo.title}</span>
                <i
                  onClick={(event) => handleDelete(event, todo.id)}
                  className="material-icons red-text"
                >
                  delete
                </i>
              </label>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default TodoList;
