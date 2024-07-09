import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import './App.css';

function App() {

  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('TaskList')) || []);
  const [task, setTask] = useState({});
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'light')

  useEffect(() => {
    console.log('useEff');
    localStorage.setItem('TaskList', JSON.stringify(taskList))
  }, [taskList])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    document.documentElement.removeAttribute('class');
    document.documentElement.classList.add(theme);
  }, [theme])

  return (
    <div className="App container">
      <Header theme={theme} setTheme={setTheme}>
        Taskmate
      </Header>
      <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
      <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
    </div>
  );
}

export default App;
