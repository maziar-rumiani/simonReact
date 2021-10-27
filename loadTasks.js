import numberOfUndones from './numberOfUndones.js'
// see the saved tasks when open the browser again
let tasks = JSON.parse(localStorage.getItem('tasks'));

if(localStorage.getItem('tasks') === null) {
  tasks = [];}
  else{
    tasks.forEach(function(task){
      const li  = document.createElement('li');
      li.id = +task.id;
      const li_text  = document.createElement('input');
      li_text.readOnly = 'readOnly';
      li_text.className = 'li_text';
      li_text.value = task.task;
      li.appendChild(li_text);
      if(task.status === 'done')li_text.classList.add('done')
      const li_str  = document.createElement('i');
      li_str.title = task.status === "Done" ?'Undone':'Done'
      li_str.className=task.status === "done" ?"strikethrough fas fa-check-square":"strikethrough far fa-circle";
      li.appendChild(li_str)
      const li_edit  = document.createElement('i');
      li_edit.title = 'Edit'
      li_edit.className="edit fas fa-edit";
      li.appendChild(li_edit)
      const li_delete  = document.createElement('i');
      li_delete.className="delete fas fa-trash-alt";
      li_delete.title = 'Delete'
      li.appendChild(li_delete);

      document.querySelector('.tasks').appendChild(li);
  });
  if(tasks.length>1){
    showClearAll()
  }
  numberOfUndones()
}



function showClearAll(){
  document.querySelector('.clearAll').style.display = 'block'
}