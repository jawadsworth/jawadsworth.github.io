var requestURL = 'https://jawadsworth.github.io/assignments/termproject/json/towns.json';    
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var projTemples = request.response;
    showTemples(projTemples);

}

function showTemples(jsonObj) {
    var pTemples = jsonObj['temples'];

    var name1 = pTemples[0].name;

    document.getElementById('test').innerHTML = name1;

}
