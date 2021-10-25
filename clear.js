//   clear each task by pressing the x button from the page
document.body.addEventListener("click",clearTask);
 function clearTask(e) {
   e.preventDefault()
   if(e.target.className.includes('delete')){
        if(confirm("Are you sure?")){
         e.target.parentElement.remove();
         console.log(e.target.parentElement);
         removeataskfromLS(e.target.parentElement);
        }
 }
// //   clear each task by pressing the x button from localstorage
}
function removeataskfromLS(listItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // console.log(listItem);
  tasks.forEach(function (task,index) {
    if(task.id === +listItem.id){
      tasks.splice(index,1);
    }
  });
  // console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks))

    if(tasks.length<2)
    document.querySelector('.clearAll').style.display = 'none'
}