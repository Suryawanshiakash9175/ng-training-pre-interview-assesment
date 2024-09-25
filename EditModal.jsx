import React from 'react';
import TaskForm from './TaskForm';

const EditModal = ({ isOpen, task, onClose, onSave }) => {
  if (!isOpen) return null;

  const handleSave = (updatedTask) => {
    onSave(updatedTask); // Save the updated task or new task
    onClose(); // Close the modal after saving
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className='new-edit-heading'>{task ? 'Edit Task' : 'New Task'}</div>
       
        <TaskForm onSubmit={handleSave} editTask={task} onCancel={onClose} />
      </div>
    </div>
  );
};

export default EditModal;
