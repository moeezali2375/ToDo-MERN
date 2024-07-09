import React from "react";

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
    console.log('showTask');
    const handleEdit = id => {
        const task = taskList.find(task => task.id === id);
        setTask(task);
    }

    const handleDelete = id => {
        const newList = taskList.filter(task => task.id !== id);
        setTaskList(newList);
    }

    return (
        <section className='showTask'>
            <p className="head">
                <span>
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                </span>
                <span className="clearAll" onClick={()=>setTaskList([])}>Clear All</span>
            </p>
            <ul>
                {taskList.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        <i className="bi bi-pencil-square" onClick={() => handleEdit(task.id)}></i>
                        <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ShowTask;