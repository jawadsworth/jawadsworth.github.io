    // Initialize and add the map
    function initMap() {
        // The location of Uluru
        var uluru = {lat: 42.0372, lng: -111.3960};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map3'), {zoom: 13, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
      }

