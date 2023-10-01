import numberOfdones from "./numberOfDones.js";
import numberOfUndones from "./numberOfUndones.js";
document.body.addEventListener("click", alert);
function alert(e) {
  e.preventDefault();
  if (e.target.className.includes("delete")) {
    document.querySelector(".alert").style.visibility = "visible";
    e.target.parentElement.classList.add("confirmDelete");
  }
  if (e.target.className.includes("clearAll")) {
    document.querySelector(".alert").style.visibility = "visible";
    document
      .querySelectorAll("li")
      .forEach((el) => el.classList.add("confirmDelete"));
  }
  if (e.target.className.includes("undoAll")) {
    document.querySelector(".alert").style.visibility = "visible";
    document
      .querySelectorAll("li")
      .forEach((el) => el.classList.add("confirmUndo"));
  }
}
document.querySelector(".yesBtn").addEventListener("click", () => {
  deleteHandler();
  undoHandler();
});
function deleteHandler(e) {
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

  numberOfUndones();
  numberOfdones();
}

function undoHandler() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach((task, index) => {
    task.status = "undone";
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.querySelectorAll(".done").forEach((el) => {
    console.log(el);
    el.classList.remove("done");
  });
  document.querySelector(".alert").style.visibility = "hidden";

  numberOfUndones();
  numberOfdones();
}

document.querySelector(".cancelBtn").addEventListener("click", cancelDelete);
function cancelDelete(e) {
  document
    .querySelectorAll("li")
    .forEach((el) => el.classList.remove("confirmDelete"));
  document
    .querySelectorAll("li")
    .forEach((el) => el.classList.remove("confirmUndo"));
  document.querySelector(".alert").style.visibility = "hidden";
}
