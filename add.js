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
  console.log(555);
  e.preventDefault();
  const input=document.querySelector(".input").value
  if(input.trim() ===''){
    document.querySelector('.input').value = "";
    return document.querySelector(".input").focus()
  }

    const li  = document.createElement('li');

    const li_remove  = document.createElement('i');
    li_remove.className="deleteItem fas fa-window-close";
    li_remove.title = 'Remove'
    
    const li_text  = document.createElement('p');
    li_text.className = 'newTask';

    li_text.appendChild(document.createTextNode(input));
    li.appendChild(li_text);
    li.appendChild(li_remove);
    document.querySelector('.tasks').appendChild(li);
    
    // save tasks in localStorage
    let tasks;
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(input);
  let myarray=JSON.stringify(tasks);
    localStorage.setItem('tasks', myarray);
    // clean the input box after savinig and showing it
    document.querySelector('.input').value = "";
    // visible the ClearAll button
    console.log(tasks.length);

    document.querySelector(".addbtn").style.visibility = 'hidden'

  if(tasks.length>1){
    document.querySelector('.clearAll').style.display = 'block'
  }
}