// todo
// document.querySelector('input').onchange();

document.addEventListener('click',(e)=>{
  if(e.target.tagName ==='INPUT' || e.target.classList.contains ('addbtn')){
    document.querySelector(".addbtn").style.visibility = 'visible'
  }
  else{
    document.querySelector(".addbtn").style.visibility = 'hidden'

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
    const li_text  = document.createElement('p');
    const li_remove  = document.createElement('i');
    const li_ST  = document.createElement('i');
    //Adding classes to Icons
    li_remove.className="deleteItem fas fa-window-close";
    li_ST.className="strikethrough fas fa-check-square";
    li_text.className = 'newTask';
    //Icons' titles
    li_remove.title = 'Remove'
    li_ST.title = 'strikethrough'
    

    


    document.querySelector('.tasks').appendChild(li);
    // console.log(li);
    // save tasks in localStorage
    let tasks;
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    li_text.id = `${tasks.length}`;
    let newTask = {id:tasks.length,task:input,status:'undone'}
    tasks.push(newTask);
    
// add ID to each task in li

    let tasksArray=JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksArray);
// add the li to the Tasks List
li_text.appendChild(document.createTextNode(input));
li.appendChild(li_text)
li.appendChild(li_ST)
li.appendChild(li_remove);





    // clean the input box after savinig and showing it
    document.querySelector('.input').value = "";
    // visible the ClearAll button
    document.querySelector(".addbtn").style.visibility = 'hidden'

  if(tasks.length>1){
    document.querySelector('.clearAll').style.display = 'block'
  }
}