import { useState } from "react";
import { singletonHook } from "react-singleton-hook";

let globalSetMode = () => {
  throw new Error("Popup failed");
};

export const usePopup = singletonHook({}, () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  globalSetMode = setSelectedTodo;

  return selectedTodo;
});
export const setSelectedTodo = (mode) => {
  globalSetMode(mode);
};
