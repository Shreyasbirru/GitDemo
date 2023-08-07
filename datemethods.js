document.write("<h1>Hello this session is<br> Date methods</h1><h2>");

var now = new Date;
document.write(now+"<br>");//its show date default format
//this function shows date in simple
document.write(now.toDateString()+"<br>");

document.write(now.getDate()+"<br>");//only date

document.write(now.getFullYear()+"<br>");

document.write(now.getDay()+"<br>");

document.write(now.getHours()+"<br>");

document.write(now.getMinutes()+"<br>");

document.write(now.getSeconds()+"<br>");

document.write(now.getMilliseconds()+"<br>");

now.setDate(2020);

document.write(now.toDateString()+"<br>");


