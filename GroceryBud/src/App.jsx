import React, { useState, useEffect } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when the app loads
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
    toast.success('Task added successfully!');
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    toast.error('Task deleted!');
  };

  // Mark task as completed
  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    toast.info(updatedTasks[index].completed ? 'Task marked as complete!' : 'Task marked as incomplete!');
  };

  // Clear completed tasks
  const clearCompleted = () => {
    const incompleteTasks = tasks.filter((task) => !task.completed);
    setTasks(incompleteTasks);
    toast.warn('Completed tasks cleared!');
  };

  return (
    <div className="app">
      <h1>Your To do</h1>
      <p className="description">Add tasks and mark them as completed by clicking on them.</p>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleCompletion={toggleCompletion} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear Completed
      </button>

      {/* Toastify Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} />
    </div>
  );
}

export default App;
