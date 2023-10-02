import {loadTasks} from "./handlers/loadTasks.js";
import {addTask} from "./modules/add.js";

loadTasks()

document.querySelector(".input").addEventListener('input', (e) => {
  document.querySelector(".addbtn").style.visibility =
    e.target.value.trim() !== "" ? "visible" : "hidden";
});

document.querySelector(".addbtn").addEventListener("click", (e)=>{
  e.preventDefault()
  document.querySelector(".addbtn").style.visibility = "hidden"
  addTask()
});
