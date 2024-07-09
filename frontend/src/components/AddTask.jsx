import React from "react";
import axios from "axios";
const URL = "http://localhost:3001/todo/";

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    //! Handle Edit Case
    if (task._id) {
      try {
        const result = await axios.put(URL + `${task._id}`, {
          newName: e.target.task.value,
        });
        const updatedTask = result.data.msg;
        const newList = taskList.map((todo) => {
          return todo._id === task._id ? updatedTask : todo;
        });
        setTaskList(newList);
        setTask({});
      } catch (error) {
        console.log("Error: " + error.message);
      }
    } else {
      //! Handle New Task Case
      if (!task.name) return;
      try {
        const result = await axios.post(URL, { name: task.name });
        const newTask = result.data.msg;
        setTask({});
        setTaskList([...taskList, newTask]);
      } catch (error) {
        console.log("Error: " + error.message);
      }
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};

export default AddTask;
