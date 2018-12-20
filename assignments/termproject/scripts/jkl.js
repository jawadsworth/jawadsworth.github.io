function test3(){
   var n;
   if (document.getElementById('select').value == 0)
   {n = -71.1916611}
   else if (document.getElementById('select').value == 1)
   {n = -72.8466285}
   else if (document.getElementById('select').value == 2)
   {n = -73.9838167}
   else if (document.getElementById('select').value == 3)
   {n =-77.2392135}
   else {n = -71.1916611}
   
   var m;
   if (document.getElementById('select').value == 0)
   {m = 42.4111066}
   else if (document.getElementById('select').value == 1)
   {m = 41.7378045}
   else if (document.getElementById('select').value == 2)
   {m = 40.7730408}
   else if (document.getElementById('select').value == 3)
   {m = 43.0389764}
   else {m = 42.4111066}

   var i = document.getElementById('select').value;
    document.getElementById('demo').innerHTML = n;
    document.getElementById('demo2').innerHTML = i;
    document.getElementById('demo3').innerHTML = m;
}