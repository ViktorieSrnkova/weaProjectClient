import axios from "axios";
const BASE_URL = "http://localhost:5000";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000";

export default axios.create({
  baseURL: BASE_URL,
});
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

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
