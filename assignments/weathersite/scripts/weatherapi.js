var weatherRequest = new XMLHttpRequest();
var apiURL;
if (document.getElementById('select').value == 0)
{var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4317656&units=imperial&APPID=860bb90544dca91f036238da81d95e46'}
else if (document.getElementById('select').value == 1)
{var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4835797&units=imperial&APPID=860bb90544dca91f036238da81d95e46'}
else if (document.getElementById('select').value == 2)
{var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5125771&units=imperial&APPID=860bb90544dca91f036238da81d95e46'}
else if (document.getElementById('select').value == 3)
{var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5130441&units=imperial&APPID=860bb90544dca91f036238da81d95e46'}
else {var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4317656&units=imperial&APPID=860bb90544dca91f036238da81d95e46'}
weatherRequest.open('GET',apiURL, true);
weatherRequest.responseType = 'text';
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.response);
    console.log(weatherData);
    var weatherString = JSON.stringify(weatherRequest.response);

    var temper = weatherData.weather[0].main;
    document.getElementById('curTemp').innerHTML = weatherData.main.temp;
}