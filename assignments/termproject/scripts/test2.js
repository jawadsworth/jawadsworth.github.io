function tryMe() {
var requestURL = 'https://jawadsworth.github.io/assignments/termproject/json/towns.json';    
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var projTemples = request.response;
    showTemples1(projTemples);

}
}

function showTemples1(jsonObj) {
    var pTemples = jsonObj['temples'];
    document.getElementById("srt").value = document.getElementById("Ultra").value;
    var i = document.getElementById(Ultra).value;

    var addressh = pTemples[i].address;

    document.getElementById('address1').innerHTML = addressh[0];
}