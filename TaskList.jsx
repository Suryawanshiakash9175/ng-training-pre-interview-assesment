import React, { useState } from 'react';


const TaskList = ({ tasks, onEdit, onDelete }) => {
  const [showDropdown, setShowDropdown] = useState(null);



  const handleDropdownToggle = (index) => {
    setShowDropdown(showDropdown === index ? null : index); // Toggle dropdown visibility
  };

 

  return (
    <div>
    <ul className="task-list">
      <div className='task-header'>
        <span>Assigned To</span>
        <span>Status</span>
        <span>Due Date</span>
        <span>Priority</span>
        <span>Comments</span>
      </div>
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <div className="task-details">&#xf022;
            <span>{task.assignedTo}</span>
            <span>{task.status}</span>
            <span>{task.dueDate}</span>
            <span>{task.priority}</span>
            <span>{task.comments?task.comments:"    "}</span>
          </div>
          <div className="task-actions">
            <button
              className="action-button"
              onClick={() => handleDropdownToggle(index)}
            >
       <i class="fa fa-caret-down"></i>
            </button>
            {showDropdown === index && (
              <div className="dropdown-menu">
                <button onClick={() => onEdit(index)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
    <div className="pagination-container">
        <button variant="light">First</button>
        <button variant="light">Prev</button>
        <span>1</span>
        <button variant="light">Next</button>
        <button variant="light">Last</button>
      </div>
     
   </div>
  );
};

export default TaskList;
