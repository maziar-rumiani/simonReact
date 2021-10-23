// time
let dayArr = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
let time;
setInterval(() => {
  time= new(Date);
  let hour= time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let day = dayArr[new Date().getDay()];
  document.querySelector(".time").innerHTML = (hour<10?'0':'')+hour + ":" +(min<10?'0':'')+ min +":" +(sec<10?'0':'')+ sec + " - " + day;
}, 1000);