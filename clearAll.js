  //   clear all the task from localStorage
  document.querySelector(".clearAll").addEventListener("click",clearAlltasks);
  function clearAlltasks(e) {
    e.preventDefault();
    if(!document.querySelector('.li')) return alert("There's nothing to delete")
    if(confirm("Are you sure?")){
      localStorage.removeItem('tasks');
    //   clear all the task from the page
    let tasks = document.querySelectorAll('.li')
    tasks.forEach(function(){
      const li = document.querySelector('.li');
      li.remove();  
    });
    }
  }