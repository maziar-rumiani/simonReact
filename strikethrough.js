document.body.addEventListener("click",(e)=>{
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if(e.target.previousSibling.classList.contains('done')){
        e.target.previousSibling.classList.remove('done')
        for(let task of tasks){
            if(task.id === +e.target.previousSibling.id){
                task.status = 'undone'
            }
        }
        // tasks[+e.target.previousSibling.id].status = 'undone'
    } 
    else if(e.target.previousSibling.classList.contains('newTask')){
        e.target.previousSibling.classList.add('done')
        console.log(e.target.previousSibling.id);
        console.log(tasks[+e.target.previousSibling.id]);

        for(let task of tasks){
            if(task.id === +e.target.previousSibling.id){
                task.status = 'done'
            }
        }

    }

    let tasksArray=JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksArray);

    console.log(tasks);
});

