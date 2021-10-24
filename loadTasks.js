// see the saved tasks when open the browser again
let tasks = JSON.parse(localStorage.getItem('tasks'));
console.log(tasks);
if(localStorage.getItem('tasks') === null) {
    tasks = [];}
else{
tasks.forEach(function(task){
    const li  = document.createElement('li');
    const li_text  = document.createElement('p');
    const li_remove  = document.createElement('i');
    const li_ST  = document.createElement('i');
    li_text.className = 'newTask';
    li_remove.className="deleteItem fas fa-window-close";
    li_ST.className="strikethrough fas fa-check-square";
    li_ST.title = 'strikethrough'
    li_remove.title = 'Remove'
    li_text.appendChild(document.createTextNode(task.task));
    li.appendChild(li_text);
    li.appendChild(li_ST)
    li.appendChild(li_remove);
    // add ID to each task in li
    li_text.id = `${task.id}`;
    console.log(task);
    if(task.status === 'done')li_text.classList.add('done')


    document.querySelector('.tasks').appendChild(li);
  });
  if(tasks.length>1){
    document.querySelector('.clearAll').style.display = 'block'
  }
}