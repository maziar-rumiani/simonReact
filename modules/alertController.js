import {deleteHandler} from "../handlers/deleteHandler.js";
import {undoneAllHandler} from "../handlers/undoneAllHandler.js";

const deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button);
    showAlert();
    document.getElementById(button.id).classList.add("confirmDelete");
  });
});

const clearAllBtn = document.querySelector(".clearAll");
clearAllBtn.addEventListener('click',  (e) => {
  e.preventDefault();
  showAlert();
  document
    .querySelectorAll("li")
    .forEach((el) => el.classList.add("confirmDelete"));
});

const undoneAllBtn = document.querySelector(".undoneAll");
undoneAllBtn.addEventListener('click',  (e) => {
  e.preventDefault()
  showAlert();
  document
    .querySelectorAll("li")
    .forEach((el) => el.classList.add("confirmUndone"));
});

const showAlert = (status = true) =>
  (document.querySelector(".alert").style.visibility = status
    ? "visible"
    : "hidden");

document.querySelector(".yesBtn").addEventListener('click', () => {
  deleteHandler();
  undoneAllHandler();
});

document.querySelector(".cancelBtn").addEventListener('click', () => {
  showAlert(false);
  document
    .querySelectorAll("li")
    .forEach((el) => el.classList.remove("confirmDelete", "confirmUndo"));
});
