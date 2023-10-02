export const updateStatisticsHandler = () => {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let donesNumber = tasks.filter(t => t.status === 'done')?.length || 0
    let unDonesNumber = tasks.filter(t => t.status === 'undone')?.length || 0
    const dones = document.querySelector('.dones')
    const undones = document.querySelector('.undones')

    dones.innerHTML = donesNumber
    dones.style.visibility = donesNumber === 0?'hidden':'visible'
    undones.innerHTML = unDonesNumber
    undones.style.visibility = unDonesNumber === 0?'hidden':'visible'

    document.querySelector('.undoneAll').style.display =  donesNumber > 1?'block':'none'
    document.querySelector(".clearAll").style.display = tasks.length > 1?'block':'none'
  }