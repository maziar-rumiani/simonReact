document.addEventListener('click',(e)=>{

    if(e.target.className ==='input' || e.target.classList.contains ('fa-plus-square')){
      document.querySelector(".addbtn").style.visibility = 'visible'

    }
    else{
      document.querySelector(".addbtn").style.visibility = 'hidden'
    }
})