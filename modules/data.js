const taskId = Math.random().toString(36).slice(2);
const tasks = [
  { id: taskId, description: 'Update laptop OS and remove old packages', completed: false },
  { id: taskId, description: 'Finish To-do app project', completed: false },
  { id: taskId, description: 'Complete rest of the tasks for the week', completed: false },
];

export default tasks;
