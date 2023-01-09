import React from "react";
import { useNavigate } from "react-router-dom";
import videoC from "../Videos/complete.mp4";
import videoP from "../Videos/priority.mp4";
import videoD from "../Videos/delete.mp4";
import videoU from "../Videos/update.mp4";
import videoN from "../Videos/newTodo.mp4";
import videoF from "../Videos/filter.mp4";
import "./css/WelcomePage.css";

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="welcome-box">
      <div className="welcome-container">
        <h1>Welcome to Todo List!</h1>
        <h2>How to use Todo List</h2>
        <ul>
          <li>
            <p>
              To add a new todo to your list just simply write your text that
              you would like in the todo in the input box and press the plus
              button.
            </p>
            <video width="852" height="580" autoPlay muted loop>
              <source src={videoN} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
          <li>
            <p>
              To update the text of the todo press the orange pencil button in
              your todo. Popup window will open where you can change the content
              of the specific todo. To save this change press the confirm button
              otherwise press the X button.
            </p>
            <video width="852" height="580" autoPlay muted loop>
              <source src={videoU} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
          <li>
            <p>
              Todo List also lets you associate your todos with four colors:
              blue, green, yellow and red. Its up to you how you choose to use
              this feature but here are some suggestions.{" "}
            </p>
            <p>
              1. Think of individual colors as groups and add the same theme of
              todos into one colors
            </p>
            <p>
              {" "}
              2. Think of individual colors as priorities which tell you in what
              order you should finish your todos{" "}
            </p>
            <p>
              3. Think of individual colors as urgency to tell you how quickly
              you should finish what todos.
            </p>
            <video width="852" height="580" autoPlay muted loop>
              <source src={videoP} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
          <li>
            <p>
              To check your todos as completed press the check button in your
              todo.
            </p>
            <video width="852" height="580" autoPlay muted loop>
              <source src={videoC} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
          <li>
            <p>To delete a todo simply press the trash can button.</p>
            <video width="852" height="580" autoPlay muted loop>
              <source src={videoD} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
          <li>
            <p>
              And lastly Todo List lets you filter your todos by colors and
              completion.
            </p>
            <video width="852" height="580" autoPlay muted loop>
              <source src={videoF} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
          <li className="last">
            <p>So let's get into it! Log in to manage your todos</p>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Log in
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WelcomePage;
