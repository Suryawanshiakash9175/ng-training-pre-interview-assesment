
let tasks = [];

export const getTasks = () => {
  return tasks;
};

export const addTask = (task) => {
  tasks.push(task);
};

export const updateTask = (index, updatedTask) => {
  tasks[index] = updatedTask;
};

export const deleteTask = (index) => {
  tasks.splice(index, 1);
};
