document.addEventListener('click',(e)=>{
    console.log(1);
    document.querySelectorAll('.deleteItem').forEach((element)=>{
        element.style.visibility = 'hidden'
    })
    let el = e.target.nextSibling;
    if(e.target.className ==='newTask' ){
        el.style.visibility = 'visible'
        e.target.style.paddingRight = '50px';
        // e.target.style.background = 'red';
        console.log(document.querySelector('.newTask'));
    }
    else if(el){
        // el.style.paddingRight = '10px';  
    }
  })