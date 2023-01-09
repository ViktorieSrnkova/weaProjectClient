import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Popup from "./components/Popup";
import RequireAuth from "./components/RequireAuth";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilterTodos] = useState([]);
  const [action, setAction] = useState(false);
  useEffect(() => {
    switch (status) {
      case "Completed":
        setFilterTodos(
          todos.filter(
            (todo) => todo.completed === 1 || todo.completed === true
          )
        );
        break;
      case "Uncompleted":
        setFilterTodos(
          todos.filter(
            (todo) => todo.completed === 0 || todo.completed === false
          )
        );
        break;
      case "0":
        setFilterTodos(todos.filter((todo) => todo.priority === 0));
        break;
      case "1":
        setFilterTodos(todos.filter((todo) => todo.priority === 1));
        break;
      case "2":
        setFilterTodos(todos.filter((todo) => todo.priority === 2));
        break;
      case "3":
        setFilterTodos(todos.filter((todo) => todo.priority === 3));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }, [todos, status]);

  return (
    <div>
      <BrowserRouter basename="/weaProjectClient">
        <div className="App">
          <Navbar />
          <div className="Content">
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route element={<RequireAuth />}>
                <Route
                  element={
                    <>
                      <Form
                        inputText={inputText}
                        todos={todos}
                        setTodos={setTodos}
                        setInputText={setInputText}
                        setStatus={setStatus}
                      />
                      <TodoList
                        setTodos={setTodos}
                        todos={todos}
                        filteredTodos={filteredTodos}
                        setAction={setAction}
                        action={action}
                      />
                      <Popup setAction={setAction} action={action}></Popup>
                    </>
                  }
                  path="/weaProjectClient"
                  exact
                />
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
        <div className="Foot"></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
