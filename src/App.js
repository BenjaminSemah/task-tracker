import React, { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Submit application for The Collab Lab',
      day: 'Monday at 9:00pm',
      reminder: true,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task}
    setTasks(prevState => (
      [...prevState, newTask]
    ))
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(prevState => (
      prevState.filter(task => task.id !== id)
    ))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(prevState => (
      prevState.map(task => (
        task.id === id ? {...task, reminder: !task.reminder} : task
      ))
    ))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {
        tasks.length > 0 
          ? <>
            < Tasks 
              tasks={tasks} 
              onDelete={deleteTask} 
              onToggle={toggleReminder} />
              <p className="toggle-text">
                Double tap to toggle reminder.
              </p>
            </>
          : ('No task has been added') 
      }
      
    </div>
  );
}

export default App;
