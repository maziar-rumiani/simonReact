// see the saved tasks when open the browser again
let tasks = JSON.parse(localStorage.getItem('tasks'));

if(localStorage.getItem('tasks') === null) {
    tasks = [];}
else{
tasks.forEach(function(task){
    const li  = document.createElement('li');
    const li_text  = document.createElement('input');
    const li_str  = document.createElement('i');
    const li_edit  = document.createElement('i');
    const li_delete  = document.createElement('i');
    li_text.className = 'li_text';
    li_str.className=task.status === "done" ?"strikethrough fas fa-check-square":"strikethrough far fa-circle";
    li_edit.className="edit fas fa-edit";
    li_delete.className="delete fas fa-trash-alt";

    li_str.title = task.status === "done" ?'Undone':'Done'
    li_edit.title = 'Edit'
    li_delete.title = 'delete'

    li_text.readOnly = 'readOnly';

    li_text.value = task.task;

    li.appendChild(li_text);
    li.appendChild(li_str)
    li.appendChild(li_edit)
    li.appendChild(li_delete);
    // add ID to each task in li
    li.id = `${task.id}`;
    if(task.status === 'done')li_text.classList.add('done')


    document.querySelector('.tasks').appendChild(li);
  });
  if(tasks.length>1){
    document.querySelector('.clearAll').style.display = 'block'
  }
}