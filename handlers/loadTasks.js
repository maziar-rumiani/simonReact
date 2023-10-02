import { updateStatisticsHandler } from "./updateStatisticsHandler.js";
import { createTaskElement } from "./createTaskElement.js";

export const loadTasks = () => {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    updateStatisticsHandler();
    tasks.forEach( task => {
      createTaskElement({
        id: task.id,
        input: task.task,
        status: task.status,
        date: task.date,
      });
    });
    if (tasks.length > 1)
      document.querySelector(".clearAll").style.display = "block";
  }
};
