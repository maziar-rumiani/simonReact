import { createTaskElement } from "../handlers/createTaskElement.js";
import { saveToLocalStorage } from "../handlers/saveToLocalStorage.js";
import { updateStatisticsHandler } from "../handlers/updateStatisticsHandler.js";
import { createdTime } from "../handlers/createdTime.js";
import { taskHighligher } from "../handlers/taskHighligher.js";

export const addTask = () => {
  const input = document.querySelector(".input");
  if (input.value.trim() === "") return input.focus();

  const date = createdTime();
  const id = new Date().getTime();

  const task = { id, input: input.value, date, status: "undone" };

  createTaskElement(task);
  saveToLocalStorage(task);
  updateStatisticsHandler();
  taskHighligher(id)
  input.value = "";
};
