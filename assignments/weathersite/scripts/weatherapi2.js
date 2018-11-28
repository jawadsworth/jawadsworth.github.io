var weatherRequest = new XMLHttpRequest();
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5678757&units=imperial&APPID=860bb90544dca91f036238da81d95e46';




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
var apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5678757&units=imperial&APPID=860bb90544dca91f036238da81d95e46';

weatherRequest2.open('GET',apiURL2, true);
weatherRequest2.responseType = 'text';
weatherRequest2.send();

weatherRequest2.onload = function () {
    var weatherData2 = JSON.parse(weatherRequest2.response);
    console.log(weatherData2);