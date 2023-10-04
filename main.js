import { addBtnVisibilityHandler } from "./handlers/addBtnVisibilityHandler.js";
import { loadTasks } from "./handlers/loadTasks.js";
import { addTask } from "./modules/add.js";

// Check if the browser supports service workers
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}

loadTasks();

addBtnVisibilityHandler()

document.querySelector(".addbtn").addEventListener("click", (e) => {
  e.preventDefault();
  addBtnVisibilityHandler()
  addTask();
});
