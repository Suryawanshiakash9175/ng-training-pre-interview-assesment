import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, editTask, onCancel }) => {
  const [task, setTask] = useState({
    title: '',
    assignedTo: '',
    status: '',
    dueDate: '',
    priority: '',
    comments: '',
  });

  useEffect(() => {
    if (editTask) {
      setTask(editTask); // Set form values for editing
    }
  }, [editTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({
      title: '',
      assignedTo: '',
      status: '',
      dueDate: '',
      priority: '',
      comments: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className='taskForm-field'>
        <span className='first'> *Assigned To</span>
        <span className='second'> *Status</span>
      </div>
      <div className="form-row">
       
        <select
          name="assignedTo"
          value={task.assignedTo}
          onChange={handleChange}
          required
        >
        <option value="" disabled>
            Assigned To
          </option>
          <option value="User1">User1</option>
          <option value="User2">User2</option>
          <option value="User3">User3</option>
          <option value="User4">User4</option>
        </select>

        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Status
          </option>
          <option value="In Progress">In Progress</option>
          <option value="Not Started">Not Started</option>
          <option value="Completed">Completed</option>
        </select>

      </div>
      <div className='taskForm-field'>
        <span className='first'> *Due Date</span>
        <span className='second'> *Priority</span>
      </div>
      <div className="form-row">
      
  
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          placeholder="Due Date" required
        />

      <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          required>
          <option value="" disabled>
            Priority
          </option>
          <option value="Normal">Normal</option>
          <option value="Low">Low</option>
          <option value="High">High</option>
        </select>


      </div>
      <div className='taskForm-field'>
        <span className='first'> Description</span>
      
      </div>
      <div className="form-row">


      
        <textarea
          name="comments"
          value={task.comments}
          onChange={handleChange}
          placeholder="Comments"
        />
      </div>

      <div className="task-form-buttons">
        <button type="button" onClick={onCancel} className="cancel-button">
          Cancel
        </button>
        <button type="submit" className="save-button">
          Save
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
