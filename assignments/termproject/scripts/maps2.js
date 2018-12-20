  // Initialize and add the map
  function initMap() {
    // The location of Uluru
    // determine longitude by temple selection
    var n;
    if (document.getElementById('select').value == 0)
    {n = -71.1916611}
    else if (document.getElementById('select').value == 1)
    {n = -72.8466285}
    else if (document.getElementById('select').value == 2)
    {n = -73.9838167}
    else if (document.getElementById('select').value == 3)
    {n =-77.2392135}
    else {n = -71.1916611}
    
    // determine latitude by temple selection
    var m;
    if (document.getElementById('select').value == 0)
    {m = 42.4111066}
    else if (document.getElementById('select').value == 1)
    {m = 41.7378045}
    else if (document.getElementById('select').value == 2)
    {m = 40.7730408}
    else if (document.getElementById('select').value == 3)
    {m = 43.0389764}
    else {m = 42.4111066}

    var uluru = {lat: m, lng: n};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('maps'), {zoom: 13, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

  //function to update map to be used when 'select' tag for temples change.
  function upMap(){
    initMap()
  
  }