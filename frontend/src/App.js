import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";
import "./App.css";

const URL = "http://localhost:3001/todo/";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );

  const fetchTodos = async () => {
    try {
      const result = await axios.get(URL);
      setTaskList(result.data.msg);
    } catch (error) {
      console.log("Error: " + error.message);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App container">
      <Header theme={theme} setTheme={setTheme}>
        Taskmate
      </Header>
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
