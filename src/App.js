import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Todo List</h1>
        <p className="app-subtitle">Organize your tasks efficiently</p>
      </header>
      <TaskInput onAddTask={addTask} />
      <TaskList 
        tasks={tasks} 
        onToggleTask={toggleTask} 
        onDeleteTask={deleteTask} 
      />
    </div>
  );
}

export default App;