// import numberOfUndones from './numberOfUndones.js'
// let element
// document.body.addEventListener("click",clearTask);
//  function clearTask(e) {
//    e.preventDefault()
//    element = e.target.parentElement
//    if(e.target.className.includes('delete')){
//       document.querySelector('.alert').style.visibility = 'visible';      
//     }
// }
//   document.querySelector('.yesBtn').addEventListener('click',()=>{
//     console.log(element.tagName);
//     if(element.tagName === 'LI')element.remove();  

//     removeataskfromLS(element);
//     document.querySelector('.alert').style.visibility = 'hidden'; 
//     return true;     
//   })
//   document.querySelector('.cancelBtn').addEventListener('click',()=>{
//     document.querySelector('.alert').style.visibility = 'hidden';      
//     return false;
//   })










// function removeataskfromLS(listItem) {

//   let tasks;
//   if(localStorage.getItem('tasks') === null) {
//     tasks = [];
//   }
//   else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.forEach(function (task,index) {
//     if(task.id === +listItem.id){
//       tasks.splice(index,1);

//     }
//   });

//   localStorage.setItem("tasks", JSON.stringify(tasks))

//     if(tasks.length<2)
//     document.querySelector('.clearAll').style.display = 'none'

//     numberOfUndones()
// }