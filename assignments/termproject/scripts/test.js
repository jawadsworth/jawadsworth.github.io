$.getJSON( "https://jawadsworth.github.io/assignments/termproject/json/towns.json", function( json ) {
    console.log( "JSON Data received, name is " + json.name);
    var name = json.name;
    document.getElementById('test').innerHTML = name;
});