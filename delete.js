import numberOfUndones from './numberOfUndones.js'
document.body.addEventListener("click",alert);
 function alert(e) {
   e.preventDefault()
   if(e.target.className.includes('delete') ){
      document.querySelector('.alert').style.visibility = 'visible';      
      e.target.parentElement.classList.add('confirmDelete')
    }
   if(e.target.className.includes('clearAll') ){
      document.querySelector('.alert').style.visibility = 'visible';      
      document.querySelectorAll('li').forEach(el => el.classList.add('confirmDelete')
        )
    }
}
document.querySelector('.yesBtn').addEventListener("click",deleteHandler);
function deleteHandler(e) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));    
    document.querySelectorAll('.confirmDelete').forEach( el => {
        tasks.forEach( (task,index)=> {
          if(task.id === +el.id){
            tasks.splice(index,1);
          }
        });
        localStorage.setItem("tasks", JSON.stringify(tasks))
        el.remove()
    })
    document.querySelector('.alert').style.visibility = 'hidden';  
    if(tasks.length<2)
    document.querySelector('.clearAll').style.display = 'none'
    numberOfUndones()
}



document.querySelector('.cancelBtn').addEventListener("click",cancelDelete);
function cancelDelete(e) {
    document.querySelectorAll('li').forEach(el => el.classList.remove('confirmDelete'))
    document.querySelector('.alert').style.visibility = 'hidden';      

}