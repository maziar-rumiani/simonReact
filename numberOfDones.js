export default function numberOfdones() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let num = tasks.filter(t => t.status === 'done').length
    num = num || 0
console.log(num);
    document.querySelector('.dones').innerHTML = num
    document.querySelector('.dones').style.visibility = num === 0?'hidden':'visible'
    document.querySelector('.undoAll').style.display =  num > 1?'block':'none'
  }