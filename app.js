let time= new(Date);
switch(new Date().getDay()){
    case 0:
      day = 'Sun';
      break;
    case 1:
      day = 'Mon';
      break;
    case 2:
      day = 'Tue';
      break;
    case 3:
      day = 'Wed';
      break;
    case 4:
      day = 'Thu';
      break;
    case 5:
      day = 'Fri';
      break;
    case 6:
      day = 'Sat';
      break;
  }


document.querySelector(".time").innerHTML="  "+time.getHours()+":"+time.getMinutes()+" - "+day;
document.querySelector(".addbtn").addEventListener("click",addtask);
function addtask(e) {
    // add tasks to the list
    const input=document.querySelector(".input").value
    const lidiv  = document.createElement('div');
    const li  = document.createElement('h3');
    const lilink  = document.createElement('img');
    const tooltiptext  = document.createElement('span');
    lilink.src="remove.png";
    li.className = 'newTask';
    lidiv.className='lidiv';
lilink.className="imagelink";
tooltiptext.className="tooltiptext";
tooltiptext.innerHTML='<div class="tooltiptext">Tooltip text</div>';
lilink.appendChild(tooltiptext);
    li.appendChild(document.createTextNode(input));
    lidiv.appendChild(li);
    lidiv.appendChild(lilink);
    document.querySelector('.tasks').appendChild(lidiv);
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
    // alert('Task saved');
    // clean the input box after savinig and showing it
    document.querySelector('.input').value = "";
// console.log(tasks)
location.reload(); //I should change it later

    e.preventDefault();
}
// see the saved tasks when open the browser again
tasks = JSON.parse(localStorage.getItem('tasks'));
if(localStorage.getItem('tasks') === null) {
    tasks = [];}
else{
tasks.forEach(function(task){
    const lidiv  = document.createElement('div');
    const li  = document.createElement('h3');
    const lilink  = document.createElement('img');
    lilink.src="remove.png";
    li.className = 'newTask';
    lidiv.className='lidiv';
    lilink.className="imagelink";
    li.appendChild(document.createTextNode(task));
    lidiv.appendChild(li);
    lidiv.appendChild(lilink);
    document.querySelector('.tasks').appendChild(lidiv);
  });
}
//   clear all the task from localStorage
document.querySelector(".clearallbtn").addEventListener("click",clearAlltasks);
function clearAlltasks(e) {
    if(confirm("Are you sure?")){
    location.reload(); //I should change it later

    localStorage.removeItem('tasks');
    e.preventDefault();
//   clear all the task from the page
// e.preventDefault();
tasks.forEach(function(){
    const lidiv = document.querySelector('.lidiv');
    lidiv.remove();

    console.log("All the tasks have been deleted!")
    e.preventDefault();
  });
    }
}
//   clear each task by pressing the x button from the page
 document.body.addEventListener("click",clearTask);
//  document.querySelector(".imagelink").addEventListener("click",clearTask);

 function clearTask(e) {
    if(e.target.className==='imagelink'){
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
tasks.forEach(function (task,index) {
    if(listItem.textContent ===task){
        tasks.splice(index,1);
    }
   });
localStorage.setItem("tasks", JSON.stringify(tasks))

}

