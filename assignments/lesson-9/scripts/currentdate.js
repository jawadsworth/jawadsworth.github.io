var d = new Date();
var days =
["Sunday", "Monday", "Tuesday", "Wednesday", "Thursda", "Friday", "Saturday"];


var j = new Date();
var months =
["January", "February", "March", "April", "May", "June", "July", "August",
"September", "October", "November", "December"]

var md = new Date();

var y = new Date();

document.getElementById("date").innerHTML = days[d.getDay()] + ", "
+ md.getDate() + " " + y.getFullYear() + " " + months[j.getMonth()] + ".";