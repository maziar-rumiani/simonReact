// import weekDays from './lang.js'
let weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
let time= new(Date);
setInterval(() => {
  time= new(Date);
}, 60000);
  let hour= time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let day = weekDays[new Date().getDay()];  
document.querySelector(".time").innerHTML = (hour<10?'0':'')+hour + ":" +(min<10?'0':'')+ min +" - " + `<strong>${day}</strong>`;

