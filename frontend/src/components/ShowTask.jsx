import React from "react";
import axios from "axios";

const URL = "http://localhost:3001/todo/";

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleEdit = async (id) => {
    const task = taskList.find((task) => task._id === id);
    setTask(task);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(URL + `${id}`);
      const newList = taskList.filter((task) => task._id !== id);
      setTaskList(newList);
    } catch (error) {
      console.log("Error: " + error.message);
    }
  };

  const handleMark = async (id) => {
    try {
      const result = await axios.put(URL + `mark/${id}`);
      const updatedTask = result.data.msg;
      const newList = taskList.map((todo) => {
        return todo._id === id ? updatedTask : todo;
      });
      setTaskList(newList);
    } catch (error) {
      console.log("Error: " + error.message);
    }
  };

  return (
    <section className="showTask">
      <p className="head">
        <span>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </span>
        {/* <span className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </span> */}
      </p>
      <ul>
        {taskList.map((task) => (
          <li key={task._id}>
            <p>
              <span className={task.completed ? "namestriked" : "name"}>
                {task.name}
              </span>
              <span className="time">{task.time}</span>
            </p>
            <i
              className={
                task.completed ? "bi-check-square-fill" : "bi-check-square"
              }
              onClick={() => handleMark(task._id)}
            ></i>
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(task._id)}
            ></i>
            <i
              className="bi bi-trash"
              onClick={() => handleDelete(task._id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
