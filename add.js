// todo
// document.querySelector('input').onchange();

document.addEventListener('click',(e)=>{
  console.log(e.target);
  if(e.target.className ==='input' || e.target.classList.contains ('fa-plus-square')){
    showAddBtn()
  }
  else{
    hideAddBtn()
  }
})

let addbtn = document.querySelector(".addbtn").addEventListener("click",addtask);

function addtask(e) {
  e.preventDefault();
  const input=document.querySelector(".input").value
  
  if(input.trim() ===''){
    document.querySelector('.input').value = "";
    return document.querySelector(".input").focus()
  }
  //creating Li and P and Icons
    const li  = document.createElement('li');
    const li_text  = document.createElement('input');
    const li_str  = document.createElement('i');
    const li_edit  = document.createElement('i');
    const li_delete  = document.createElement('i');
    //Adding classes to Icons
    li_text.className = 'li_text';
    li_str.className="strikethrough far fa-circle";
    li_edit.className="edit fas fa-edit";
    li_delete.className="delete fas fa-trash-alt";
    //Icons' titles
    li_str.title = 'Done'
    li_edit.title = 'Edit'
    li_delete.title = 'delete'
    
    
    li_text.readOnly = 'readOnly';
    

    
    document.querySelector('.tasks').appendChild(li);
    // console.log(li);
    // save tasks in localStorage
    let tasks;
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    li.id = `${tasks.length}`;
    let task = {id:tasks.length,task:input,status:'undone'}
    tasks.push(task);
    
// add ID to each task in li

    let tasksArray=JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksArray);
    // add the li to the Tasks List
li_text.value = input

li.appendChild(li_text)
li.appendChild(li_str)
li.appendChild(li_edit)
li.appendChild(li_delete);





// clean the input box after savinig and showing it
    document.querySelector('.input').value = "";
    // visible the ClearAll button
    document.querySelector(".addbtn").style.visibility = 'hidden'

    if(tasks.length>1){
      document.querySelector('.clearAll').style.display = 'block'
    }
}



function showAddBtn(){
  document.querySelector(".addbtn").style.visibility = 'visible'
}
function hideAddBtn(){
  document.querySelector(".addbtn").style.visibility = 'hidden'
}