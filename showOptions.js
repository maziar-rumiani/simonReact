let show = true;
document.addEventListener('click',(e)=>{
    
    document.querySelectorAll('.deleteItem').forEach((element)=>{
        element.style.visibility = 'hidden'
    })
    document.querySelectorAll('.strikethrough').forEach((element)=>{
        element.style.visibility = 'hidden'
    })

    let el = e.target.nextSibling;
    if(e.target.classList.contains('newTask') && show){

        el.style.visibility = 'visible'
        el.nextSibling.style.visibility = 'visible'
        
        e.target.style.paddingRight = '50px';
        // e.target.style.background = 'red';
    }
    else{
        // el.style.paddingRight = '10px';  
    }
    show = !show
  })