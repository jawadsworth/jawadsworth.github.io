var requestURL = 'https://jawadsworth.github.io/assignments/termproject/json/towns.json';    
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var projTemples = request.response;
    showTemples1(projTemples);

}

function showTemples1(jsonObj) {
    var pTemples = jsonObj['temples'];
    
    var addressh = pTemples[0].address;
    var phoneh = pTemples[0].telephone;
    var serviceh = pTemples[0].services;
    var historyh = pTemples[0].history;
    var baptismh = pTemples[0].baptism;
   

    document.getElementById('test').innerHTML = addressh[0];
    document.getElementById('address1').innerHTML = addressh[0];
    document.getElementById('address2').innerHTML = addressh[1];
    document.getElementById('phone').innerHTML = phoneh;
    document.getElementById('service1').innerHTML = serviceh[0];
    document.getElementById('service2').innerHTML = serviceh[1];
    document.getElementById('service3').innerHTML = serviceh[2];
    document.getElementById('service4').innerHTML = serviceh[3];
    document.getElementById('history1').innerHTML = historyh[0];
    document.getElementById('history2').innerHTML = historyh[1];
    document.getElementById('history3').innerHTML = historyh[2];
    document.getElementById('b1').innerHTML = baptismh[0];
    document.getElementById('b2').innerHTML = baptismh[1];
    document.getElementById('b3').innerHTML = baptismh[2];
    document.getElementById('b4').innerHTML = baptismh[3];
    document.getElementById('b5').innerHTML = baptismh[4];
    document.getElementById('b6').innerHTML = baptismh[5];
    document.getElementById('b7').innerHTML = baptismh[6];
    document.getElementById('b8').innerHTML = baptismh[7];
}


function tryMe(){

var requestURL = 'https://jawadsworth.github.io/assignments/termproject/json/towns.json';    
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var projTemples = request.response;
    showTemples(projTemples);

}
}


function showTemples(jsonObj) {
    var pTemples = jsonObj['temples'];
    var i = document.getElementById('srt').value = document.getElementById('select').value;
    var addressh = pTemples[i].address;
    var phoneh = pTemples[i].telephone;
    var serviceh = pTemples[i].services;
    var historyh = pTemples[i].history;

    document.getElementById('test').innerHTML = addressh[0];
    document.getElementById('address1').innerHTML = addressh[0];
    document.getElementById('address2').innerHTML = addressh[1];
    document.getElementById('phone').innerHTML = phoneh;
    document.getElementById('service1').innerHTML = serviceh[0];
    document.getElementById('service2').innerHTML = serviceh[1];
    document.getElementById('service3').innerHTML = serviceh[2];
    document.getElementById('service4').innerHTML = serviceh[3];
    document.getElementById('history1').innerHTML = historyh[0];
    document.getElementById('history2').innerHTML = historyh[1];
    document.getElementById('history3').innerHTML = historyh[2];
    
}



