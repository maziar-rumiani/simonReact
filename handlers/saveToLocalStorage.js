export const saveToLocalStorage = ({ input, date, id, status }) => {
  const task = { id, task: input, status, date };
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  let tasksArray = JSON.stringify(tasks);
  localStorage.setItem("tasks", tasksArray);
};
