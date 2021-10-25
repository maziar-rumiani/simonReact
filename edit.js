document.body.addEventListener("click",(e)=>{

    if(e.target.classList.contains('edit')){

        let tasks = JSON.parse(localStorage.getItem('tasks'));
        let li_text = e.target.previousSibling.previousSibling
    if(li_text.readOnly){
        li_text.removeAttribute('readonly')
        li_text.focus();
        li_text.classList.add('onEdit')
    }
    else{
        li_text.classList.remove('onEdit')
        li_text.readOnly = true;
        for(let task of tasks){
            if(task.id === +li_text.parentElement.id){
                task.task = li_text.value
            }
        }
        console.log(li_text.value);
    }
    console.log(li_text);
    // if(e.target.previousSibling.classList.contains('done')){
    //     e.target.previousSibling.classList.remove('done')
    //     for(let task of tasks){
        //         if(task.id === +e.target.previousSibling.id){
            //             task.status = 'undone'
    //         }
    //     }
    // } 
    // else if(e.target.previousSibling.classList.contains('li_text')){
    //     e.target.previousSibling.classList.add('done')
    //     console.log(e.target.previousSibling.id);
    //     console.log(tasks[+e.target.previousSibling.id]);

    //     for(let task of tasks){
        //         if(task.id === +e.target.previousSibling.id){
            //             task.status = 'done'
            //         }
            //     }
            
    // }
    
    let tasksArray=JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksArray);
    
    // console.log(tasks);
    }
});

