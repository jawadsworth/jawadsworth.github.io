
function doInputOutput()
{
    var a = parseFloat(document.getElementById("temp").value);
    var b = parseFloat(document.getElementById("speed1").value);

    degrees = 35.74 + 0.6215*a - 35.75 * Math.pow(b, 0.16) + 0.4275*a*Math.pow(b, 0.16);
   
    document.getElementById("output").innerHTML = degrees.toFixed(0) + " °F";

}


