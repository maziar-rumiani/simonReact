export default function numberOfUndones() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let num = tasks.filter(t => t.status === 'undone').length
    num = num || 0

    document.querySelector('.undones').innerHTML = num
    document.querySelector('.undones').style.visibility = num === 0?'hidden':'visible'
  }