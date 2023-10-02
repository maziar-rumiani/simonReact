import {loadTasks} from "./handlers/loadTasks.js";
import {addTask} from "./modules/add.js";

// Check if the browser supports service workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
          console.error('Service Worker registration failed:', error);
      });
}

// Check if the app is installed
// window.addEventListener('beforeinstallprompt', (e) => {
//   e.preventDefault();
//   // const installButton = document.getElementById('install-button');
//   // installButton.style.display = 'block';

//   installButton.addEventListener('click', () => {
//       e.prompt();
//       installButton.style.display = 'none';
//   });
// });

///////////////////////
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
