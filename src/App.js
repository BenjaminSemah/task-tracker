import React, { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
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
          ? <Tasks 
            tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleReminder} />
          : ('No task has been added') 
      }
    </div>
  );
}

export default App;
