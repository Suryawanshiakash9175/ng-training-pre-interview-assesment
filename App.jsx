import React, { useState } from 'react';
import TaskList from './components/TaskList';
import EditModal from './components/EditModal';


import './index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  const handleNewTask = () => {
    setEditingTaskIndex(null); // Reset the index to indicate a new task
    setIsModalOpen(true); // Open the modal
  };

  const handleSaveTask = (task) => {
    if (editingTaskIndex !== null) {
      // Update the task at the specified index
      const updatedTasks = tasks.map((t, index) =>
        index === editingTaskIndex ? task : t
      );
      setTasks(updatedTasks);
    } else {
      // Add a new task
      setTasks([...tasks, task]);
    }
    setIsModalOpen(false); // Close the modal after saving
  };

  const handleEditTask = (index) => {
    setEditingTaskIndex(index); // Set the index of the task to be edited
    setIsModalOpen(true); // Open the modal
  };

  const handleDeleteTask = (index) => {
    
    setTasks(tasks.filter((_, i) => i !== index)); // Remove the selected task
  };

  return (
    <div className="app">
      <header className="header">
        <div className='header-parent'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
        </svg>
        <span>Tasks</span>
        <span className='header-button-parent'>
        <button className="header-button" onClick={handleNewTask}>
          New Task
        </button>
        <button className='header-button' >Refresh</button>
       
        </span>
        </div>
        </div>
      
      </header>
      
      <div className='search-input'> <input type='text' className='search-bar' placeholder='search ...&#128269;'/></div>

      <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />

      

      {/* Modal for Adding/Editing Tasks */}
      {isModalOpen && (
        <EditModal
          isOpen={isModalOpen}
          task={editingTaskIndex !== null ? tasks[editingTaskIndex] : null} // Pass task data if editing, otherwise null
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveTask}
        />
      )}
    </div>
  );
};

export default App;
