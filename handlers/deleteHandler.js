import { updateStatisticsHandler } from "./updateStatisticsHandler.js";

export const deleteHandler = () => {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  document.querySelectorAll(".confirmDelete").forEach((el) => {
    tasks.forEach((task, index) => {
      if (task.id === +el.id) {
        tasks.splice(index, 1);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    el.remove();
  });
  document.querySelector(".alert").style.visibility = "hidden";
  updateStatisticsHandler();
};
