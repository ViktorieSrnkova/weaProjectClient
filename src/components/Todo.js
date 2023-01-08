import React from "react";
import { deleteTodo, modifyTodo } from "../api/axios";
import { setSelectedTodo } from "../hooks/usePopup";

const Todo = ({ todo, todos, setTodos, action, setAction }) => {
  const COLORS = [0, 1, 2, 3];

  const updateHandler = () => {
    setSelectedTodo(todo);
  };

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.ID_todo !== todo.ID_todo));
    deleteTodo(todo).then((res) => setAction(!action));
  };

  const completeHandler = async () => {
    const update = { ...todo };
    update.completed = !todo.completed;
    await setTodos(
      todos.map((item) => {
        if (item.ID_todo === todo.ID_todo) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
    await modifyTodo(update).then((res) => setAction(!action));
  };

  const priorityHandler = async () => {
    const update = { ...todo };
    let i = todo.priority + 1;
    if (i > 3) i = 0;
    update.priority = COLORS[i];
    await setTodos(
      todos.map((item) => {
        if (item.ID_todo === todo.ID_todo) {
          let i = item.priority + 1;
          if (i > 3) i = 0;
          return {
            ...item,
            priority: COLORS[i],
          };
        }
        return item;
      })
    );
    await modifyTodo(update).then((result) => setAction(!action));
  };

  return (
    <div className="todos">
      <div
        className={`todo ${todo.priority === 0 ? "todo-prio-gray" : ""} ${
          todo.priority === 1 ? "todo-prio-green" : ""
        } ${todo.priority === 2 ? "todo-prio-orange" : ""} ${
          todo.priority === 3 ? "todo-prio-red" : ""
        }`}
      >
        <li
          className={`todo-item ${
            todo.completed ? "completed" : "uncompleted"
          }`}
        >
          {todo.todo_text}
        </li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={updateHandler} className="update-btn">
          <i className="fas fa-pen"></i>
        </button>
        <button
          onClick={priorityHandler}
          className={`priority-btn ${todo.priority === 0 ? "prio-gray" : ""} ${
            todo.priority === 1 ? "prio-green" : ""
          } ${todo.priority === 2 ? "prio-orange" : ""} ${
            todo.priority === 3 ? "prio-red" : ""
          }`}
        >
          <i className="fas fa-exclamation"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
