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

    document.getElementById('test').innerHTML = addressh[0];
    document.getElementById('address1').innerHTML = addressh[0];
    document.getElementById('address2').innerHTML = addressh[1];
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
    var name1 = pTemples[i].name;

    document.getElementById('test').innerHTML = name1[0];
    document.getElementById('test1').innerHTML = name1[0];
    document.getElementById('test2').innerHTML = name1[1];
}



