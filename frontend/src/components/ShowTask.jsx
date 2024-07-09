import React from "react";
import axios from "axios"

const URL="http://localhost:3000/todo/";

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
    const handleEdit = async (id) => {
        try {
            const task = taskList.find(task => task.id === id);
            setTask(task);
    
            await axios.put(URL+`${id}`, {
                name: task.name
            });
            console.log('Task updated successfully');
        } catch (error) {
            console.error('Error updating task:', error);
        }
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