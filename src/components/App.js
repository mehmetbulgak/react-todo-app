import React from "react";
import TaskListContextProvider from "../contexts/TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Header from "./Header";

// CSS
import "../css/main.css"

const App = () => {
  return (
    <div className="todo-container">
      <div className="container-overlay">
        <TaskListContextProvider>
          <div className="container">
            <div className="app-wrapper">
              <Header />
              <div className="main">
                <TaskForm />
                <TaskList />
              </div>
            </div>
          </div>
        </TaskListContextProvider>
      </div>
    </div>
  );
};

export default App;