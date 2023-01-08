import "./css/Popup.css";
import { useState, useEffect } from "react";
import { modifyTodo } from "../api/axios";
import { setSelectedTodo, usePopup } from "../hooks/usePopup";

const Popup = (props) => {
  const [value, setValue] = useState("");
  const selectedTodo = usePopup();

  useEffect(() => {
    if (selectedTodo === null) {
      setValue("");
    } else {
      setValue(selectedTodo.todo_text);
    }
  }, [selectedTodo]);

  const closeHandler = () => {
    setSelectedTodo(null);
  };

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const updateHandler = () => {
    const update = { ...selectedTodo };
    update.todo_text = value;
    modifyTodo(update).then((res) => {
      setSelectedTodo(null);
    });
    props.setAction(!props.action);
  };

  if (selectedTodo === null) {
    return "";
  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={closeHandler}>
          X
        </button>
        <label htmlFor="todo-text"> Update todo</label>
        <br />
        <textarea
          maxLength={90}
          value={value}
          type="text"
          id="todo-text"
          autoComplete="off"
          onChange={changeHandler}
          className="update-popup"
        ></textarea>
        <br />
        <button className="confirm-btn" onClick={updateHandler}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Popup;
