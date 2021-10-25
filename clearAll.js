  //   clear all the task from localStorage
  document.querySelector(".clearAll").addEventListener("click",clearAlltasks);
  function clearAlltasks(e) {
    console.log('Whyyyyyyyyyy?');
    e.preventDefault();
    if(!document.querySelector('.delete')) return alert("There's nothing to delete")
    let tasks = document.querySelectorAll('li')
    if(confirm("Are you sure?")){
      localStorage.removeItem('tasks');
    //   clear all the task from the page
    tasks.forEach(function(){
      const li = document.querySelector('li');
      li.remove();  
    });
    }

//unfocuse the clear button
document.querySelector(".clearAll").blur()

    if(!document.querySelector('li')){
      document.querySelector('.clearAll').style.display = 'none'
    }
  }