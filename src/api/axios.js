import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://weaprojektservervs.up.railway.app";

export const modifyTodo = (todo) => {
  return axios.post("/todo", todo);
};

export const deleteTodo = (todo) => {
  return axios.delete("/todo", {
    data: todo,
  });
};

export const getTodos = () => {
  return axios.get("/todos");
};

export const sendLogin = (user) => {
  return axios.post("/login", user);
};

export const getStoredJWT = () => {
  return localStorage.getItem("_token");
};

export const checkJWTValidity = () => {
  return axios.get("/validate");
};

export const sendLogout = () => {
  return axios.post("/logout");
};
