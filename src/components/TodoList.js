import React, { useEffect } from "react";
import { getTodos } from "../api/axios";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos, action, setAction }) => {
  useEffect(() => {
    getTodos().then((data) => {
      setTodos(data.data);
    });
  }, [setTodos]);

  useEffect(() => {
    getTodos().then((data) => {
      setTodos(data.data);
    });
  }, [action, setTodos]);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo, i) => (
          <Todo
            key={i}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            action={action}
            setAction={setAction}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
