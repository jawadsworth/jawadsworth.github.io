var weatherRequest = new XMLHttpRequest();
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5061036&units=imperial&APPID=860bb90544dca91f036238da81d95e46';




weatherRequest.open('GET',apiURL, true);
weatherRequest.responseType = 'text';
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.response);
    console.log(weatherData);
    var weatherString = JSON.stringify(weatherRequest.response);

    var temper = weatherData.weather[0].main;
    document.getElementById('currentTemp').innerHTML = weatherData.main.temp;
    document.getElementById('hum').innerHTML = weatherData.main.humidity;
    document.getElementById('ws').innerHTML = weatherData.wind.speed;
    document.getElementById('soc1').innerHTML = temper;
    document.getElementById('soc2').innerHTML = temper;

    var l = weatherData.main.temp;
    var m = weatherData.wind.speed;
    var n = l*m;
    var x = 35.74 + 0.6215*l - 35.75 * Math.pow(m, 0.16) + 0.4275*l*Math.pow(m, 0.16);

    document.getElementById('wc').innerHTML = x.toFixed(2) + '&degF';

   

}

var weatherRequest2 = new XMLHttpRequest();
var apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5061036&units=imperial&APPID=860bb90544dca91f036238da81d95e46';

weatherRequest2.open('GET',apiURL2, true);
weatherRequest2.responseType = 'text';
weatherRequest2.send();

weatherRequest2.onload = function () {
    var weatherData2 = JSON.parse(weatherRequest2.response);
    console.log(weatherData2);

    var today = new Date(weatherData2.list[0].dt_txt);

    /*It appears that in order to get the 16-day forecast you have to pay to get the
    API key.  Hence, I am trying to fill in the forecast data using an awkward forecast
    for every three hours, but try to just get the forecast high for the next five days
    To complicate this, sometimes the JSON data is projecting so far ahead that if I start 
    with the getDate() from the first JSON data (or list item 0) then the getDate() ends
    up being tomorrow.  So I have worked a formula that will ensure that I always get today's
    day of the week to start my data for the upcoming week.  Unfortunately, I cannot always
    get todays "high" temperature.*/

    /*Set variables so that 'weekday[i]' will always equal todays weekday*/

    var a = today.getDate(); 
    var b = new Date().getDate();
    var c = today.getDay(); 
    var d = b - a;
    var i = c + d;
   

    var weekday = new Array(7);
        weekday[-1]= "Sat";
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
    
    /*Set the weekdays to automatically enter into the Preston page under the forecast section*/

    document.getElementById('day0').innerHTML = weekday[i];
    document.getElementById('day1').innerHTML = weekday[i+1];
    document.getElementById('day2').innerHTML = weekday[i+2];
    document.getElementById('day3').innerHTML = weekday[i+3];
    document.getElementById('day4').innerHTML = weekday[i+4];
    document.getElementById('day5').innerHTML = weekday[i+5];

    /*The problem is that sometimes the list item 0 gives temparture at an hour for today, but
    sometimes it reflects temperature for some time tomorrow, depending on what time it is today.
    As a result, I have set the first variable list to be tf1.  When item list 0 is giving me
    temperature data for tomorrow, then tf1 will equal 0, if it is reflecting temperature data 
    for today, then it will equal 8, which will be data for tomorrow.
    This is a little complicated.  The designers of this course should reassess how to do this 
    forecast part.  They should either ensure that the students have access to the 16-day forecast,
    or they should give more direction on what is expected from the forecast for the every three hours 
    for the next several days.*/

    var tf = d * 6;
    var tf1 = 6 + tf;

    document.getElementById('f1').innerHTML = weatherData2.list[tf1].main.temp_max.toFixed(1) + '&degF';
    document.getElementById('f2').innerHTML = weatherData2.list[tf1+8].main.temp_max.toFixed(1) + '&degF';
    document.getElementById('f3').innerHTML = weatherData2.list[tf1+16].main.temp_max.toFixed(1) + '&degF';
    document.getElementById('f4').innerHTML = weatherData2.list[tf1+24].main.temp_max.toFixed(1) + '&degF';
    document.getElementById('f5').innerHTML = weatherData2.list[tf1+32].main.temp_max.toFixed(1) + '&degF';


   

}