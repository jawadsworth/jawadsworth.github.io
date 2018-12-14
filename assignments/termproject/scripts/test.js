$.getJSON( "https://jawadsworth.github.io/assignments/termproject/json/temples.json", function( json ) {
    console.log( "JSON Data received, name is " + json.temples[0].name);
    var temple = json['temples'];
    var temple1 = temple[0].name;
    document.getElementById('test').innerHTML = temple1;
});