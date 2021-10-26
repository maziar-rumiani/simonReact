import numberOfUndones from './numberOfUndones.js'

// import numberOfUndones from './time'
document.addEventListener('click',(e)=>{

  if(e.target.className ==='input' || e.target.classList.contains ('fa-plus-square')){
    document.querySelector(".addbtn").style.visibility = 'visible'
  }
  else{
    document.querySelector(".addbtn").style.visibility = 'hidden'
  }
})

let addbtn = document.querySelector(".addbtn").addEventListener("click",addtask);
let input;
let tasks;
let task;
let id;
function addtask(e) {
  e.preventDefault();
  id = new Date().getTime()
  
  input=document.querySelector(".input").value
  // ifEmptey
  if(input.trim() ===''){
    document.querySelector('.input').value = "";
     document.querySelector(".input").focus()
     return
  }

  const li  = document.createElement('li');
  li.id = id;
  document.querySelector('.tasks').appendChild(li);
  const li_text  = document.createElement('input');
  li_text.className = 'li_text';
  li_text.readOnly = 'readOnly';
  li_text.value = input
  li.appendChild(li_text)
  const li_str  = document.createElement('i');
  li_str.className="strikethrough far fa-circle";
  li_str.title = 'Gedaan'
  li.appendChild(li_str)
  const li_edit  = document.createElement('i');
  li_edit.className="edit fas fa-edit";
  li_edit.title = 'Bewerking'
  li.appendChild(li_edit)
  const li_delete  = document.createElement('i');
  li_delete.className="delete fas fa-trash-alt";
  li_delete.title = 'Verwijderen'
  li.appendChild(li_delete);

    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    task = {id:id,task:input,status:'undone'}

    tasks.push(task);

    let tasksArray=JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksArray);

  if(tasks.length>1){
    showClearAll()
  }
  cleanInput()
  numberOfUndones()
}

function cleanInput(){
  document.querySelector('.input').value = "";
}
function showClearAll(){
  document.querySelector('.clearAll').style.display = 'block'
}
