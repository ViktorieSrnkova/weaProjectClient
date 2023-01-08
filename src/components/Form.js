import React from "react";
import { modifyTodo } from "../api/axios";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      completed: false,
      priority: 0,
      todo_text: inputText,
    };
    modifyTodo(newTodo).then((response) => setTodos([...todos, response.data]));
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className="todo-form">
      <input
        maxLength={90}
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="Completed">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
          <option value="0">Blue</option>
          <option value="1">Green</option>
          <option value="2">Yellow</option>
          <option value="3">Red</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
