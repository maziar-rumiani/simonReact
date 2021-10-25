let tasks = getTasksFromLocal()
document.body.addEventListener("click",(e)=>{
    if(e.target.classList.contains('strikethrough')){
        if(e.target.previousSibling.classList.contains('done')){
            undoneTask(e.target)
        } 
        else if(e.target.previousSibling.classList.contains('li_text')){
            doneTask(e.target)
            console.log(e.target);
        }
        saveTasksToLocal()
    }
});



function getTasksFromLocal(){
    return JSON.parse(localStorage.getItem('tasks'));
}

function saveTasksToLocal(){
    let tasksArray=JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksArray);
}

function doneTask(doneBtn){
    doneBtn.previousSibling.classList.add('done')
    for(let task of tasks){
        if(task.id === +doneBtn.parentElement.id){
                console.log(doneBtn);
                task.status = 'done'
            }
        }
}

function undoneTask(doneBtn){
    doneBtn.previousSibling.classList.remove('done')
    console.log(tasks);
        for(let task of tasks){
            if(task.id === +doneBtn.parentElement.id){
                task.status = 'undone'
            }
        }
}