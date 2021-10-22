//   clear each task by pressing the x button from the page
document.body.addEventListener("click",clearTask);
 function clearTask(e) {
   if(e.target.tagName==='I'){
        if(confirm("Are you sure?")){
         e.target.parentElement.remove();
         removeataskfromLS(e.target.parentElement);
        }
 }
// //   clear each task by pressing the x button from localstorage
}
function removeataskfromLS(listItem) {
  console.log(listItem);
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
    }
    else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task,index) {
      if(listItem.textContent ===task){
        tasks.splice(index,1);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks))
}