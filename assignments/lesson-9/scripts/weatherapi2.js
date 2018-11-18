var weatherRequest = new XMLHttpRequest();
var apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5061036&units=imperial&APPID=860bb90544dca91f036238da81d95e46';




weatherRequest.open('GET',apiURL, true);
weatherRequest.responseType = 'text';
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.response);
    console.log(weatherData);
    var weatherString = JSON.stringify(weatherRequest.response);

    var temper = weatherData.weather[0].main;

    document.getElementById('soc1').innerHTML = temper;


    
}

