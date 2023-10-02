import {updateStatisticsHandler} from "../handlers/updateStatisticsHandler.js";

document.addEventListener('click', (e) => {
  if (e.target.classList.contains("strikethrough")) {
    const el = e.target
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    let task = tasks.find(task => task.id === +el.id);
    const inputElement = document.getElementById(el.id).firstChild
    if (inputElement.classList.contains("done")) {
      task.status = "undone";
      el.classList.remove("fas", "fa-check-square");
      el.classList.add("far", "fa-circle");
      inputElement.classList.remove("done");
      el.title = "Done";
    } else {
      task.status = "done";
      inputElement.classList.add("done");
      el.classList.remove("far", "fa-circle");
      el.classList.add("fas", "fa-check-square");
      el.title = "Undone";
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    updateStatisticsHandler();
  };
});
