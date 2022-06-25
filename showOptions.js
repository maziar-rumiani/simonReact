document.addEventListener('click',(e)=>{
  document.querySelectorAll('.createdDate').forEach((element)=>{
    element.style.visibility = 'hidden'
  })
  document.querySelectorAll('.strikethrough').forEach((element)=>{
    element.style.visibility = 'hidden'
  })
  document.querySelectorAll('.edit').forEach((element)=>{
    element.style.visibility = 'hidden'
  })
  document.querySelectorAll('.delete').forEach((element)=>{
    element.style.visibility = 'hidden'
  })
  
  document.querySelectorAll('.li_text').forEach( element => element.style.marginBottom= '10px')

  let el = e.target.nextSibling;
  if(e.target.classList.contains('li_text')  ){

    el.style.visibility = 'visible'
    el.nextSibling.style.visibility = 'visible'
    el.nextSibling.nextSibling.style.visibility = 'visible'
    el.nextSibling.nextSibling.nextSibling.style.visibility = 'visible'
    
    e.target.style.marginBottom= '50px';
      // e.target.style.background = 'red';
  }
    else{
        // el.style.paddingRight = '10px';  
    }
  })