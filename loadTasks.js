// see the saved tasks when open the browser again
tasks = JSON.parse(localStorage.getItem('tasks'));
if(localStorage.getItem('tasks') === null) {
    tasks = [];}
else{
tasks.forEach(function(task){
    const li  = document.createElement('div');
    const li_text  = document.createElement('p');
    const li_remove  = document.createElement('i');
    li_text.className = 'newTask';
    li.className='li';
    li_remove.className="deleteItem fas fa-window-close";
    li_text.appendChild(document.createTextNode(task));
    li.appendChild(li_text);
    li.appendChild(li_remove);
    document.querySelector('.tasks').appendChild(li);
  });
}