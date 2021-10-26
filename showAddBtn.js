document.addEventListener('click',(e)=>{

    if(e.target.className ==='input' || e.target.classList.contains ('fa-plus-square')){
      document.querySelector(".addbtn").style.visibility = 'visible'
      console.log(3);
    }
    else{
      document.querySelector(".addbtn").style.visibility = 'hidden'
    }
})