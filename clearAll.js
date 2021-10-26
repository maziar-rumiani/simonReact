import numberOfUndones from './numberOfUndones.js'
let clearAllItems = false;
//   clear all the task from localStorage
  document.querySelector(".clearAll").addEventListener("click",clearAlltasks);
  function clearAlltasks(e) {
    e.preventDefault();   
      document.querySelector('.alert').style.visibility = 'visible';      
      clearAllItems = !clearAllItems
      numberOfUndones()
  }


  document.querySelector('.yesBtn').addEventListener('click',()=>{
    if(clearAllItems){localStorage.removeItem('tasks');
      let tasks = document.querySelectorAll('li')
      tasks.forEach(function(){
      const li = document.querySelector('li');
      li.remove();  
      });
    }
  if(!document.querySelector('li')){
    document.querySelector('.clearAll').style.display = 'none'
  }
  document.querySelector('.alert').style.visibility = 'hidden'; 
  // return true;     
})

document.querySelector('.cancelBtn').addEventListener('click',()=>{
  document.querySelector('.alert').style.visibility = 'hidden';      
  // return false;
})