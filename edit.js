document.body.addEventListener("click",editHandler)

function editHandler (e){
console.log(e);
    if(e.target.classList.contains('edit')){

        let tasks = JSON.parse(localStorage.getItem('tasks'));
        let li_text = e.target.previousSibling.previousSibling
        if(li_text.readOnly){
            li_text.removeAttribute('readonly')
            li_text.focus();
            li_text.classList.add('onEdit')
            e.target.title = 'Save'
            e.target.classList.remove('fa-check-square')
            e.target.classList.add('fa-save')
        }
        else{
            li_text.classList.remove('onEdit')
            li_text.readOnly = true;
            for(let task of tasks){
                if(task.id === +li_text.parentElement.id){
                    task.task = li_text.value
                    // console.log(task.task);
                    e.target.title = 'Edit'
                    e.target.classList.remove('fa-save')
                    e.target.classList.add('fa-check-square')
                }
            }
        }
    let tasksArray=JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksArray);
    
    // console.log(tasks);
    }
};

document.body.addEventListener("keyup", (e)=> {
    console.log(e.key);
    if (e.key === 'Enter') {
      // Cancel the default action, if needed
      e.preventDefault();
      editHandler(e)
    }
});