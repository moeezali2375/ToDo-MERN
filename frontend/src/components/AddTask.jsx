import React from "react";

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  console.log("Add task");
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    console.log(task);
    if (task.id) {
      // Update existing task in the list
      const newList = taskList.map((todo) => {
        return todo.id === task.id
          ? {
              ...task,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo;
      });

      setTaskList(newList);
      setTask({});
    } else {
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      setTaskList([...taskList, newTask]);
      setTask({});
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
