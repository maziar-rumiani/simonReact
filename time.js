// time
let day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
let time;
setInterval(() => {
  time= new(Date);
  document.querySelector(".time").innerHTML = time.getHours() + ":" + time.getMinutes() +":" + time.getSeconds()+ " - " + day[new Date().getDay()];
}, 1000);