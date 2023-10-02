import { updateStatisticsHandler } from "./updateStatisticsHandler.js";

export const undoneAllHandler = (e) => {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach((task) => (task.status = "undone"));
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.querySelectorAll(".done").forEach((el) => {
    el.classList.remove("done");
    el.classList.add("undone");
  });

  document.querySelectorAll(".strikethrough").forEach((el) => {
    el.classList.remove("fas", "fa-check-square");
    el.classList.add("far", "fa-circle");
  });
  updateStatisticsHandler();
};
