//   clear each task by pressing the x button from the page
document.body.addEventListener("click",clearTask);
 function clearTask(e) {
   e.preventDefault()
   if(e.target.className.includes('deleteItem')){
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
    // console.log(tasks);
    tasks.forEach(function (task,index) {
      if(listItem.textContent ===task.task){
        tasks.splice(index,1);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks))

    if(tasks.length<2)
    document.querySelector('.clearAll').style.display = 'none'
}